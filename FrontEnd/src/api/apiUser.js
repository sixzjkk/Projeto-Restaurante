export default async function apiUser ({name = undefined, email, password, functionUser}) {
    try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/${functionUser}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }).json();

            if (res.error) {
                throw new Error(res.message);
            }

            return res.token;
        } catch (err) {
            console.error(err);
            return err;
        }
}