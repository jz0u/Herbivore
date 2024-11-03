const StrainDetails = ({strain}) => {

    return(
        <div className="strain-details">
            <h4>{strain.name}</h4>
            <p><strong>Type</strong>{strain.type}</p>
            <p><strong>THC</strong>{strain.thc}</p>
            <p><strong>CBD</strong>{strain.cbd}</p>
            <p><strong>Effects</strong>{strain.effects}</p>
            <p>{strain.createdAt}</p>
        </div>
    )

}

export default StrainDetails