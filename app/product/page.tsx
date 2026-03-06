import Link from "next/link";
import { Productservice, product } from "../Service/product-service";

export default async function Product({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const products: product[] = await Productservice.getallproducts();

  const query = params?.search;
  const searchTerm =
    typeof query === "string"
      ? query.trim()
      : Array.isArray(query)
      ? query[0].trim()
      : "";

  const filteredProducts = searchTerm
    ? products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="container mt-4 min-vh-100">
      {searchTerm && (
        <h5 className="mb-4">
          Search Results for: <strong>{searchTerm}</strong>
        </h5>
      )}

      <div className="row justify-content-center">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
          >
            <div
              className="card shadow-sm w-100 text-center"
              style={{
                backgroundColor: "#f8e6f0",
                height: "320px",
                borderRadius: "10px",
              }}
            >
              <Link href={`/product/${p.id}`}>
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="mx-auto d-block"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    padding: "15px",
                  }}
                />
              </Link>

              <div className="card-body d-flex flex-column">
                <h6
                  className="card-title"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    minHeight: "40px",
                  }}
                >
                  {p.title.length > 40
                    ? p.title.substring(0, 40) + "..."
                    : p.title}
                </h6>

                <p
                  className="mt-auto"
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#198754",
                  }}
                >
                  ₹{p.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center mt-5">
          <h5>No products found</h5>
          <p>Try searching with a different keyword.</p>
        </div>
      )}
    </div>
  );
}