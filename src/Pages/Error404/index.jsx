import ErrorSection from "../../Components/Error_404";
import PageHeading from "../../Components/PageHeading";
import { pageTitle } from "../../helper";
import { PROJECT_HEADING_BG } from "../../config/images";

const Error404 = () => {
  const BreadcrumbsData = {
    backgroundImage: PROJECT_HEADING_BG,
    title: "Page not found",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "404", active: true },
    ],
  };

  const errData = {
    title: "404",
    subtitle: "Oops! Page Not Found!",
    message:
      "Sorry, the page you're seeking isn't here. It could have been relocated or removed.",
    buttonText: "Return Home",
    buttonLink: "/",
  };
  pageTitle("Error");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ErrorSection data={errData} />
    </>
  );
};

export default Error404;
