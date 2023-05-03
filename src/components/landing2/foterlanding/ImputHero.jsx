import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import iconlupa from '../../../assets/img/iconlupa.svg';



export default function InputHero() {
  return (
    <>
      <div className='input-nav' style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
        <InputGroup className="input mb-3" >
          <Form.Control className='form-imput'
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" className="button-addon2">
            <img src={iconlupa} alt='imagen de buscar'/>
          </Button>
        </InputGroup>

      </div>



    </>
  );
}
