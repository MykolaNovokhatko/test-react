
export default function OfficerProfile({officer: {name, age, specialization, status}}) {
    
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Spec: {specialization}</p>
            <p>status: {status === "Active" ? "Is active" : "Not active"}</p>
        </div>
    )
}