import Hero from '../components/hero';
import Homecards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      <Hero title="Bienvenidos" subtitle="este es el subtitulo" />
      <Homecards /> 
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
