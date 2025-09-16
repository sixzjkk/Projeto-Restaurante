export default async function apiUser ({name = undefined, email, password, functionUser, navigate}) {
    try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/${functionUser}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            const data = await res.json();

            if (data.error) {
                throw new Error(data.message);
            }

            navigate('/');

            return data.token;
        } catch (err) {
            console.error(err);
            return err; 
        }
}