import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  getUsersByEmail,
  createUser,
  getProducts,
} from "@/sanity/sanity-utils";
import { currentUser } from "@clerk/nextjs";

export default async function page() {
  const user = await currentUser();

  if (!user) return <div>You're not logged in</div>;
  const existingUser = await getUsersByEmail(
    user?.emailAddresses[0]?.emailAddress
  );

  if (existingUser?.length === 0) {
    await createUser({
      name: user?.username,
      email: user?.emailAddresses[0]?.emailAddress,
      user: existingUser,
    });
  }

  const products = await getProducts();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-[#582086] text-center">
          Get Your Awesome Goodies
        </h1>
        <p className="text-center text-xl text-gray-500">
          Welcome to TechTrove, your one-stop destination for cutting-edge
          electronics that redefine innovation!
        </p>
      </div>

      <div className=" flex p-10">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
