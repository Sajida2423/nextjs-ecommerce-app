

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/logo.png";
// import Script from "next/script";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <>
//       {/* Load Bootstrap JS for collapse toggle */}
//       <Script
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//         strategy="beforeInteractive"
//       />

//       <nav
//         className="navbar navbar-expand-lg"
//         style={{ backgroundColor: "#3c0023", fontFamily: "Arial, sans-serif" }}
//       >
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link href="/" className="navbar-brand">
//             <div style={{ height: "50px", width: "90px", position: "relative" }}>
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 style={{ objectFit: "contain" }}
//                 fill
//               />
//             </div>
//           </Link>

//           {/* Hamburger */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           {/* Navbar Links + Search */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* Links */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   href="/"
//                   className={`nav-link ${
//                     pathname === "/" ? "active text-success fw-bold" : "text-white"
//                   }`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   href="/product"
//                   className={`nav-link ${
//                     pathname === "/product"
//                       ? "active text-success fw-bold"
//                       : "text-white"
//                   }`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Products
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   href="/cart"
//                   className={`nav-link ${
//                     pathname === "/cart" ? "active text-success fw-bold" : "text-white"
//                   }`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Cart
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   href="/about"
//                   className={`nav-link ${
//                     pathname === "/about"
//                       ? "active text-success fw-bold"
//                       : "text-white"
//                   }`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   href="/contact"
//                   className={`nav-link ${
//                     pathname === "/contact"
//                       ? "active text-success fw-bold"
//                       : "text-white"
//                   }`}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>

//             {/* Search Form */}
//             <form
//               className="d-flex mx-auto"
//               role="search"
//               style={{ maxWidth: "400px", width: "100%" }}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const form = e.currentTarget;
//                 const input = form.search.value;
//                 if (input.trim() !== "") {
//                   router.push(`/product?search=${encodeURIComponent(input.trim())}`);
//                 }
//               }}
//             >
//               <input
//                 name="search"
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search....."
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/logo.png";
// import Script from "next/script";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   return (
//     <>
//       {/* Load Bootstrap JS for collapse toggle */}
//       <Script
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//         strategy="beforeInteractive"
//       />

//       <nav
//         className="navbar navbar-expand-lg"
//         style={{ backgroundColor: "#3c0023", fontFamily: "Arial, sans-serif" }}
//       >
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link href="/" className="navbar-brand">
//             <div style={{ height: "50px", width: "90px", position: "relative" }}>
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 style={{ objectFit: "contain" }}
//                 fill
//               />
//             </div>
//           </Link>

//           {/* Hamburger */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ borderColor: "white" }}
//           >
//             <span
//               className="navbar-toggler-icon"
//               style={{
//                 filter:
//                   "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(105%) contrast(105%)",
//               }}
//             />
//           </button>

//           {/* Navbar Links + Search */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* Links */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "/product", label: "Products" },
//                 { href: "/cart", label: "Cart" },
//                 { href: "/about", label: "About Us" },
//                 { href: "/contact", label: "Contact Us" },
//               ].map((link) => (
//                 <li className="nav-item" key={link.href}>
//                   <Link
//                     href={link.href}
//                     className={`nav-link ${
//                       pathname === link.href
//                         ? "active text-success fw-bold"
//                         : "text-white"
//                     }`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Search Form */}
//             <form
//               className="d-flex mx-auto"
//               role="search"
//               style={{ maxWidth: "400px", width: "100%" }}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const form = e.currentTarget;
//                 const input = form.search.value;
//                 if (input.trim() !== "") {
//                   router.push(
//                     `/product?search=${encodeURIComponent(input.trim())}`
//                   );
//                 }
//               }}
//             >
//               <input
//                 name="search"
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search....."
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/logo.png";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/product", label: "Products" },
//     { href: "/cart", label: "Cart" },
//     { href: "/about", label: "About Us" },
//     { href: "/contact", label: "Contact Us" },
//   ];

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-dark"
//       style={{ backgroundColor: "#3c0023", fontFamily: "Arial, sans-serif" }}
//     >
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link href="/" className="navbar-brand">
//           <div style={{ width: "120px", height: "70px", position: "relative" }}>
//             <Image src={logo} alt="Logo" fill style={{ objectFit: "contain" }} />
//           </div>
//         </Link>

//         {/* Hamburger */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         {/* Navbar Links + Search */}
//         <div className="collapse navbar-collapse" id="navbarContent">
//           {/* Links with responsive rows */}
//           <ul
//             className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap justify-content-start"
//             style={{ gap: "1rem" }}
//           >
//             {navLinks.map((link) => (
//               <li
//                 className="nav-item flex-grow-0"
//                 key={link.href}
//                 style={{ minWidth: "100px" }} // ensures reasonable width
//               >
//                 <Link
//                   href={link.href}
//                   className={`nav-link ${
//                     pathname === link.href ? "active text-success fw-bold" : ""
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Search */}
//           <form
//             className="d-flex mt-2 mt-lg-0"
//             role="search"
//             style={{ maxWidth: "400px", width: "100%" }}
//             onSubmit={(e) => {
//               e.preventDefault();
//               const input = (e.currentTarget.search as HTMLInputElement).value;
//               if (input.trim() !== "") {
//                 router.push(`/product?search=${encodeURIComponent(input.trim())}`);
//               }
//             }}
//           >
//             <input
//               name="search"
//               className="form-control me-2"
//               type="search"
//               placeholder="Search..."
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import Script from "next/script";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#3c0023", fontFamily: "Arial, sans-serif" }}
      >
        <div className="container-fluid">
        <a className="navbar-brand  text-white" href="#">SmartCart</a>
          {/* Logo */}
          {/* <Link href="/" className="navbar-brand">
            <div style={{ height: "50px", width: "90px", position: "relative" }}>
              <Image
                src={logo}
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link> */}

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "white" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                filter:
                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(105%) contrast(105%)",
              }}
            />
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${
                    pathname === "/" ? "active text-warning fw-bold" : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/product"
                  className={`nav-link ${
                    pathname === "/product"
                      ? "active text-warning fw-bold"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/cart"
                  className={`nav-link ${
                    pathname === "/cart"
                      ? "active text-warning fw-bold"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${
                    pathname === "/about"
                      ? "active text-warning fw-bold"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${
                    pathname === "/contact"
                      ? "active text-warning fw-bold"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </li>

            </ul>

            {/* Search */}
            <form
              className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0"
              role="search"
              style={{ maxWidth: "400px", width: "100%" }}
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const input = (form.search as HTMLInputElement).value;

                if (input.trim() !== "") {
                  router.push(`/product?search=${encodeURIComponent(input.trim())}`);
                }
              }}
            >
              <input
                name="search"
                className="form-control"
                type="search"
                placeholder="Search....."
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}