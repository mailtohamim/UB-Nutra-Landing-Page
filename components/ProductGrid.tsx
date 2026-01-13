
import Link from "next/link";
import { Product } from "@/lib/data";
import { ShoppingBag } from "lucide-react";

interface ProductGridProps {
    products: Product[];
    title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center text-swisse-charcoal uppercase mb-12 tracking-tight">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <Link href={`/shop`} className="block relative aspect-square bg-gray-50 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                                {product.badge && (
                                    <span className="absolute top-4 left-4 bg-ub-red text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                                        {product.badge}
                                    </span>
                                )}
                            </Link>

                            <div className="p-6">
                                <p className="text-sm text-gray-500 font-bold uppercase mb-2">{product.category}</p>
                                <h3 className="text-xl font-bold text-swisse-charcoal mb-2 group-hover:text-ub-red transition-colors">
                                    <Link href={`/shop`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{product.description}</p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-lg font-bold text-swisse-charcoal">{product.price}</span>
                                    <button className="flex items-center justify-center p-3 bg-swisse-charcoal text-white rounded-full hover:bg-ub-red transition-colors">
                                        <span className="text-xs font-bold uppercase px-2">Buy Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
