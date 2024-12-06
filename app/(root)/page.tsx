export default async function Home() {
  // ============= client side api integration   ============
  // const [userDetails, setUserDetails] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const res = await fetch("https://api.github.com/users/NoorNazar123");

  //       if (!res.ok) {
  //         throw new Error("User is not found!");
  //       }

  //       const data = await res.json();
  //       setUserDetails(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserDetails();
  // }, []); // Empty dependency array means this effect runs once after the component mounts.

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  //============ new servier side api integration =========

  const res = await fetch("https://api.github.com/users/NoorNazar123");
  if (!res.ok) throw new Error("Api integration fails");
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-8 sm:p-20">
      {/* User Info Section */}
      <div className="max-w-2xl w-full  rounded-lg shadow-lg p-8 text-center space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">{data.name}</h1>
          <p className="text-gray-300 my-4">{data.bio}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            width={150}
            height={150}
            className="rounded-full shadow-md border-4 border-purple-500"
          />
        </div>

        {/* Followers */}
        <div>
          <p className="text-xl font-semibold text-white">
            Followers: <span className="text-gray-300">{data.followers}</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-white text-center">
        <p>Made with ❤️ using Next.js</p>
      </footer>
    </div>
  );
}
