import Header from "./header";
import Carousel from "./carousel";
import Listcard from "./list-card";
import Footer from "./footer";

export default function BaiTapLayoutComponent() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="my-5">
        <Listcard />
      </div>
      <Footer />
    </div>
  )
}
