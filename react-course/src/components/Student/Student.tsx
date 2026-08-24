import type { StudentProps } from "./StudentProps";

const Student = (props: StudentProps) => {
    const imageURL = `https://ui-avatars.com/api?name=${props.fullName}`;

    return (
        <div className="container p4 bg-success my-3 rounded">
            <div className="row border">
                <div className="col-2"><img src={imageURL} style={{ maxWidth: '50px' }} /></div>
                <div className="col-8">
                    {props.fullName}
                    <br />
                    Coding Experience: {props.experience} years
                </div>

                <div>{props.children}</div>
            </div>
        </div>

    );

}

export default Student;