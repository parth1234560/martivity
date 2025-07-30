# Firebase Security Rules for Martivity

This document explains the Firebase security rules setup for different user roles (Admin, Seller, Buyer) in the Martivity e-commerce platform.

## Files Created

1. **`firestore.rules`** - Firestore database security rules
2. **`storage.rules`** - Firebase Storage security rules  
3. **`src/firebaseAuth.ts`** - Authentication helper functions
4. **`src/firebase.ts`** - Firebase configuration

## User Roles

### Admin
- **Full access** to all data and operations
- Can manage users, products, orders, categories
- Can access analytics and admin settings
- Can upload/manage all types of files

### Seller
- Can **create, read, update, delete** their own products
- Can **read** orders for their products
- Can **update** order status and shipping information
- Can **read** buyer profiles for transactions
- Can **upload** product images and manage their store
- Can **access** their own analytics

### Buyer
- Can **read** all published products
- Can **create** orders and reviews
- Can **read** their own orders and reviews
- Can **read** seller profiles for product information
- Can **upload** profile images and order documents

## Deploying Rules

### Prerequisites
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```

### Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

### Deploy Storage Rules
```bash
firebase deploy --only storage
```

## Setting Up Custom Claims for Roles

To enable role-based security, you need to set custom claims for users. You can do this through Firebase Admin SDK or Firebase Console.

### Using Firebase Console:
1. Go to Firebase Console > Authentication > Users
2. Select a user
3. Add custom claim: `{"role": "admin"}` or `{"role": "seller"}` or `{"role": "buyer"}`

### Using Admin SDK (Node.js):
```javascript
const admin = require('firebase-admin');

// Set admin role
await admin.auth().setCustomUserClaims(uid, {role: 'admin'});

// Set seller role  
await admin.auth().setCustomUserClaims(uid, {role: 'seller'});

// Set buyer role
await admin.auth().setCustomUserClaims(uid, {role: 'buyer'});
```

## Security Features

### Firestore Rules
- **User isolation**: Users can only access their own data
- **Role-based access**: Different permissions for admin/seller/buyer
- **Data validation**: Ensures data integrity
- **Public read access**: Published products and categories are publicly readable

### Storage Rules
- **File organization**: Structured file paths for different content types
- **Role-based upload**: Only authorized users can upload specific file types
- **Public assets**: Branding and public images are readable by everyone
- **Temporary uploads**: Users can upload temporary files in their own space

## Collection Structure

### Users Collection
```
users/{userId}
├── uid: string
├── email: string
├── displayName: string
├── role: 'admin' | 'seller' | 'buyer'
├── phoneNumber?: string
├── address?: string
├── createdAt: Date
└── updatedAt: Date
```

### Products Collection
```
products/{productId}
├── name: string
├── description: string
├── price: number
├── sellerId: string
├── categoryId: string
├── status: 'draft' | 'published' | 'archived'
├── images: string[]
├── createdAt: Date
└── updatedAt: Date
```

### Orders Collection
```
orders/{orderId}
├── buyerId: string
├── sellerId: string
├── productId: string
├── quantity: number
├── totalAmount: number
├── status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
├── shippingInfo: object
├── trackingNumber?: string
├── createdAt: Date
└── updatedAt: Date
```

## Testing Rules

You can test the rules using Firebase Emulator:

```bash
firebase emulators:start
```

Then test your rules in the Firebase Console or using the Firebase CLI.

## Best Practices

1. **Always validate data** on both client and server side
2. **Use custom claims** for role-based access control
3. **Implement proper error handling** for security rule violations
4. **Regularly audit** your security rules
5. **Test thoroughly** before deploying to production
6. **Monitor** Firebase usage and security events

## Troubleshooting

### Common Issues:
1. **Permission denied**: Check if user has proper role and custom claims
2. **Rules not updating**: Clear browser cache and redeploy rules
3. **Storage upload failed**: Verify file path and user permissions
4. **Firestore queries failing**: Ensure indexes are created for complex queries

### Debugging:
- Use Firebase Console to view security rule evaluation
- Check Firebase logs for detailed error messages
- Test rules in Firebase Emulator before production deployment 