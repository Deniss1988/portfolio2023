import HeroBlock from "../../components/HeroBlock/HeroBlock";
import PhoneBlock from "../../components/PhoneBlock/PhoneBlock";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import FormBlock from "../../components/FormBlock/FormBlock";
import "./Home.css";

function Home() {
  return (
    <main>
      <HeroBlock />
      <PhoneBlock />
      <ContentBlock />
      <FormBlock />
    </main>
  );
}

export default Home;
