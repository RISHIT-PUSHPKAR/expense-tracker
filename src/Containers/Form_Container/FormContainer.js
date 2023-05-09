import Form from "../../Components/Form/Form";

const FormContainer = (props) => {
  const getData = (data) => {
    props.sendData(data);
  };

  return (
    <div>
      <Form getData={getData} />
    </div>
  );
};

export default FormContainer;
