import jsonwebtoken from "jsonwebtoken";
const PRIVATE_KEY = "123"
export const login = (req, res) => {
    const {registration_code, password } = req.body
    try {
      // const correctPassword = email === 'filipe@exmaple.com' && password === '123456';
  
      // if (!correctPassword) return response.status(401).send('Password or E-mail incorrect!');
  
      const token = jsonwebtoken.sign(
        { registration_code },
        PRIVATE_KEY,
        { expiresIn: '60m' }
      );
  
      return res.status(200).json({ data: { registration_code, token } });
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  };