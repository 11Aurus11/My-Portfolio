import SectionHeader from "./SectionHeader";
import SectionNavigation from "./SectionNavigation";
import SectionServices from "./SectionServices";
import SectionPortfolio from "./SectionPortfolio";
import SectionContact from "./SectionContact";
import SectionFooter from "./SectionFooter";
import "../scss/global.scss"

function App() {
  return (
    <>
      <SectionNavigation />
      <SectionHeader />
      <SectionServices />
      <SectionPortfolio />
      <SectionContact />
      <SectionFooter />
    </>
  );
}

export default App;
