import { useEffect } from "react";
import { parseJwt } from "~/Utils";
import { AuthForm } from "~/Widgets/AuthForm";
//fb5cfad7-5fa9-429e-94bd-6d80cc215376
/**
 * "data": {
        "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTk2YzVjMS05MGQ5LTcyYTUtYjE0Ni1hNTljNjBmYWU0ODMiLCJyb2xlX25hbWUiOiJVc2VyIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTc0NzA3NTQwOSwiZXhwIjoxNzQ3MDc2MzA5fQ.k7HBPavkLMY2BTUMfSIFFNqu_jZncBZMzwwBhE7YmJCqyb_pobT5GH_xXUINDG8F-KSzs7J5tHCspvcvv3xgpqBrVDb6flvi80Er_zC3reTUd2ocVQjJPfJ_EouLB0Klrsmmx_qGSh8UMcTNAHREO14jYmr32Peasp9oB1apLmemtQZMc0fhRBNmxJJnYTCicLFz8h6rki8YVFCxTOx-PbrIQ1LRJ1UN9Q-FAM4FJSSCiunE2R66zOfLphIEZ6dnn_F4Pm1M5yAKDkcfiSIrXfJXLr9jI6Y9CxSbURk69NPoip5umRIPeNKXlt6mtKuq2PSQCOejZRPM6ssdwNH8EQ",
        "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTk2YzVjMS05MGQ5LTcyYTUtYjE0Ni1hNTljNjBmYWU0ODMiLCJyb2xlX25hbWUiOiJVc2VyIiwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3NDcwNzU0MDksImV4cCI6MTc0OTY2NzQwOX0.k0rqR5o1St_X4xpgYPfwkUy8UTDjh72pzQ0q_6vSuwb-e2MJo7uAjCVeQlcA03OrIT0bDi8mnbx5dPkRWZdncyKVvrNjoubRVWQrsjbJ6e_VYEBciUonyR1mQtmdru0_B_0AySqD_xi63b7SPnbSvCAXtVS3KTD0UcAoQKzq8vpuruh3xHjsm6R6fQL7VehuNkz5auOW-v-brx3ja62W5-XKk5WygTL_4mmKqs1PNKuH497aTTf5hn-_ct-9g2SUZz21u18fATA7-qOkSOE0SgQGHgyDhwkdoqsbYl_o8Ni-B8Cf9Hcdfy2XCSA3pOKepac_hikOkv3VV2Aqv9STkw"
    },
 */
const Login = () => {
    useEffect(() => {
        // fetch('http://82.202.130.103:8005/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        //     body: JSON.stringify({
        //         // token: "fb5cfad7-5fa9-429e-94bd-6d80cc215376"
        //         email: 'russke46@gmail.com',
        //         password: 'qwerty123',
        //         // first_name: "аферист",
        //         // last_name: "траян",
        //         // second_name: "иксэсэсович",
        //         // phone: '+7(918)777-14-88'
        //     })

        // })
    }, []);
    return <div className="form-container">
        <AuthForm mode="login"/>
    </div>
}

export default Login;