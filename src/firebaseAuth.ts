import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { auth, db } from './firebase';

// User roles
export type UserRole = 'admin' | 'seller' | 'buyer';

// User interface
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  phoneNumber?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication functions
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  email: string, 
  password: string, 
  displayName: string, 
  role: UserRole = 'buyer'
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update profile
    await updateProfile(user, { displayName });

    // Create user document in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      displayName,
      role,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await setDoc(doc(db, 'users', user.uid), userProfile);

    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// User profile functions
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (uid: string, updates: Partial<UserProfile>) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: new Date()
    });
  } catch (error) {
    throw error;
  }
};

// Role-based access control
export const isAdmin = (user: User | null, userProfile?: UserProfile): boolean => {
  if (!user) return false;
  return userProfile?.role === 'admin';
};

export const isSeller = (user: User | null, userProfile?: UserProfile): boolean => {
  if (!user) return false;
  return userProfile?.role === 'seller';
};

export const isBuyer = (user: User | null, userProfile?: UserProfile): boolean => {
  if (!user) return false;
  return userProfile?.role === 'buyer';
};

// Get all users (admin only)
export const getAllUsers = async (): Promise<UserProfile[]> => {
  try {
    const usersQuery = query(collection(db, 'users'));
    const querySnapshot = await getDocs(usersQuery);
    return querySnapshot.docs.map(doc => doc.data() as UserProfile);
  } catch (error) {
    throw error;
  }
};

// Get sellers only
export const getSellers = async (): Promise<UserProfile[]> => {
  try {
    const sellersQuery = query(
      collection(db, 'users'),
      where('role', '==', 'seller')
    );
    const querySnapshot = await getDocs(sellersQuery);
    return querySnapshot.docs.map(doc => doc.data() as UserProfile);
  } catch (error) {
    throw error;
  }
};

// Get buyers only
export const getBuyers = async (): Promise<UserProfile[]> => {
  try {
    const buyersQuery = query(
      collection(db, 'users'),
      where('role', '==', 'buyer')
    );
    const querySnapshot = await getDocs(buyersQuery);
    return querySnapshot.docs.map(doc => doc.data() as UserProfile);
  } catch (error) {
    throw error;
  }
};

// Auth state listener
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
}; 