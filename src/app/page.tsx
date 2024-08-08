import DescUseApi from "@/components/home/desc-use";
import ResourcesApi from "@/components/home/resources-api";
import SectionStartHome from "@/components/home/section-start-home";
import SponsorsProject from "@/components/home/sponsors-project";

export default function Home() {
  return (
    <>
      <SectionStartHome />
      <DescUseApi />
      <ResourcesApi />
      <SponsorsProject />
    </>
  );
}
