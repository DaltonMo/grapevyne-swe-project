import React, { useEffect, useState } from "react";
import { getMe } from "../services/user";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {user ? `Welcome back, ${user.username}!` : "Unauthorized"}
      </h1>
    </div>
  );
}