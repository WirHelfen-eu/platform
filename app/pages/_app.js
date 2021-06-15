import 'tailwindcss/tailwind.css'
import { Provider } from "next-auth/client"
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps}></Component>
    </Provider>
  )
}

export default MyApp
