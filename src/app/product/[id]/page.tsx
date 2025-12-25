import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    id: "vocal-presets-pack",
    title: "Vocal Presets – Mix Like a Magician",
    description:
      "A premium vocal preset pack designed to help producers and artists achieve clean, powerful, and professional vocal mixes instantly. Crafted for modern music production workflows, these presets deliver studio-quality results with minimal effort.",
    price: 799,
    image: {
      src: "/images/product1.jpg", // your uploaded image
    },
    features: [
      "Professionally mixed vocal presets",
      "Compatible with major DAWs",
      "Perfect for rap, hip-hop, pop & melodic vocals",
      "Instant drag-and-drop workflow",
      "Crisp clarity, balanced tone, and punch",
      "Beginner-friendly & studio-ready",
    ],
  },
];


export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <section className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={product.image.src}
          alt={product.title}
          className="rounded-2xl border border-gray-800"
        />

        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {product.title}
          </h1>

          <p className="text-gray-400 mb-6">{product.description}</p>

          <ul className="space-y-2 mb-6">
            {product.features.map((feature, i) => (
              <li key={i} className="text-gray-300">
                • {feature}
              </li>
            ))}
          </ul>

          <p className="text-3xl font-semibold text-white mb-8">
            ₹{product.price}
          </p>

          <Link
            href={`/checkout/${product.id}`}
            className="block w-full text-center py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 text-black"
          >
            Proceed to Checkout
          </Link>


        </div>
      </div>
    </section>
  );
}
