import { Link, routes } from '@redwoodjs/router'

import DeployerForm from '../../components/DeployerForm/DeployerForm'

// Get ABI
import ABI from '../../common/Deployer'

// consts
const mainnetAddress = '0x72237Caa65c3092Be989D997D19C2b6c694ac8b0'

// Component
const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <DeployerForm contractAddress={mainnetAddress} ABI={ABI} />
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
