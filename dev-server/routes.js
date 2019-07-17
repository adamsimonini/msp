import taskRoutes from './api/task/tasks-routes';
import regRoutes from './api/register/register-routes';
import authRoutes from './api/auth/auth-routes.js';
import userRoutes from './api/user/user-routes';

export function registerRoutes(app) {
    app.use('/api', taskRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes);
    app.use('/api', authRoutes);
}
