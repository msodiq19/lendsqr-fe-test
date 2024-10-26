import LoginForm from '@/components/auth/login-form';
import styles from './login.module.scss';
export default function LoginPage(){
    return (
        <div className={styles.login}>
            <div className={styles.loginContent}>
                <div>
                    <h2>Welcome</h2>
                    <p>Enter details to login.</p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}