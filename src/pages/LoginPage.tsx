import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white/55 flex justify-center items-center py-20">
      <div className="bg-green-900 p-12 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3
               bg-white border border-none rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-white border border-none rounded text-black focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 pt-5 pb-5 rounded transition duration-300 mt-2"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
