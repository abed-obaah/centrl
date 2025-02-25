const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-[400px] rounded-xl border border-[#000]/15 px-6 py-4">
      <div>
        <div className="mb-8">
          <p className="text-foreground font-700 text-200 mb-1">Welcome</p>
          <h1 className="text-black font-700 text-700 mb-1">Admin</h1>
          <p className="text-foreground font-600">Sign in</p>
        </div>

        <hr className="text-[#000]/15 mb-6" />

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block  font-600  text-foreground mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="you@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[#000]/15  outline-none transition text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block  font-600  text-foreground mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••"
                className="w-full px-4 py-2.5 rounded-lg border border-[#000]/15 outline-none transition text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-200 mt-8 rounded-lg bg-gradient-to-r from-[#BCD4FF] to-[#DBAFF9] px-6 py-2.5  font-700 text-black  transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
