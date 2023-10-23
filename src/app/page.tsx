import Logo from "@components/Logo";
import SignInBtn from "@components/SignInBtn";
export default function Home() {
    return (
        <main className="h-full flex flex-col items-center justify-center w-full flex-1 px-20 text-center pt-6">
            <Logo size={60} />
            <div className="text-5xl lg:text-6xl font-bold mt-3">
                <h1>Welcome to <span style={{color: '#e37336' }}>CourseMinder</span></h1>
            </div>
            <p className="mt-3 text-base md:text-xl lg:text-2xl p-2">
                A course management app for students
            </p>
            <div className="p-3">
                <SignInBtn />
            </div>
            <div className="p-3 mt-6 text-left w-96 flex flex-col items-center border rounded-xl">
                <h3 className="text-2xl font-bold">Features</h3>
                <ul className="mt-4 text-lg list-disc">
                    <li>Manage your courses</li>
                    <li>Track your progress</li>
                    <li>Get reminders</li>
                    <li>And more!</li>
                </ul>
            </div>
        </main>
    );
}
