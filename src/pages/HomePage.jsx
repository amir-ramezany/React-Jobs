import Hero from "../componenets/Hero";
import HomeCard from "../componenets/HomeCard";
import JobListings from "../componenets/JobListings";
import ViewAllJobs from "../componenets/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
