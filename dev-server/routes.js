import nestRoutes from './api/nest/nests-routes';
import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/users-routes';
import authRoutes from './api/auth/auth-routes';
import inventRoutes from './api/invent/invent-routes';
import orderRoutes from './api/order/orders-routes';
import recurRoutes from './api/recur/recurs-routes';
import coutRoutes from './api/cout/cout-routes';
import catRoutes from './api/cat/cat-routes';
import itemRoutes from './api/item/item-routes';




export function registerRoutes(app) {
    app.use('/api', nestRoutes);
    app.use('/api', userRoutes);
    app.use('/api', inventRoutes);
    app.use('/api', orderRoutes);
    app.use('/api', recurRoutes);
    app.use('/api', coutRoutes);
    app.use('/api', catRoutes);
    app.use('/api', itemRoutes);

}