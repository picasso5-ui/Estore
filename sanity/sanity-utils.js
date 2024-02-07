import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "b2k6fbvr",
  dataset: "production",
  apiVersion: "2024-02-05",
  title: "estore",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

export async function getProductBySlug(slug) {
    return client.fetch(
      groq`*[_type== "product" && slug.current == $slug]{
        _id,
        createdAt,
        title,
        description,
        price,
        "image":image.asset->url,
         "slug":slug.current,
      }`,
      {slug}
    )
}

export async function getProducts() {
  return client.fetch(
    groq`*[_type =="product"] {
        _id,
        createdAt,
        title,
        "slug":slug.current,
        "image":image.asset->url,
        description,
        price,
       
    }`
  );
}

export async function getUsersByEmail(email) {
  return client.fetch(
    groq`*[_type =="user" && email == $email] {
            _id,
            name,
            email,
            createdAt,
        }`,
    { email }
  );
}

//creating a user in sanity
export async function createUser(userData) {
  const { name, email } = userData;

  const existingUser = await getUsersByEmail(email);

  if (existingUser?.length > 0) {
    throw new Error("user already exists");
  }

  const newUser = await client.create({
    _type: "user",
    name,
    email,
    createdAt: new Date().toLocaleString(),
  });
  return newUser;
}
