import {useEffect, useState} from 'react'


//components
import StrainDetails from '../components/StrainDetails'
import StrainForm from '../components/StrainForm'

const Home = () => {
    const [strains, setStrains] = useState(null)

    useEffect(() => {
      const fetchStrains = async () =>{
        const response = await fetch('/api/strains')
        const json = await response.json()

        if(response.ok){
            setStrains(json)
        }

      }
      fetchStrains()
    }, [])
    


    return (
        <div className="home">
            <div className="strains">
                {strains && strains.map((strain) => (
                    <StrainDetails key={strain._id} strain={strain} />
                ))}
                
            </div>
            <StrainForm />
        </div>
    )
}

export default Home;