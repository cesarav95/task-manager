import * as admin from 'firebase-admin';
import serviceAccount from '../../task-manager-key.json';


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any)
});

const db = admin.firestore();

export { db };