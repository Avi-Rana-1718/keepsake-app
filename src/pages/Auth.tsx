import { useState } from "react";

export function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://nook-yvgg.onrender.com/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error("Authentication failed");
      // Optionally handle success (e.g., redirect)
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-4 flex flex-col items-center justify-center min-h-screen bg-background text-onBackground dark:bg-background-dark dark:text-onBackground-dark">
      <h2 className="text-2xl font-bold mb-4">Authentication</h2>
      <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="px-3 py-2 rounded border border-outline bg-surface text-onSurface dark:bg-surface-dark dark:text-onSurface-dark"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          className="px-3 py-2 rounded border border-outline bg-surface text-onSurface dark:bg-surface-dark dark:text-onSurface-dark"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-primary text-onPrimary font-semibold dark:bg-primary-dark dark:text-onPrimary-dark disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
