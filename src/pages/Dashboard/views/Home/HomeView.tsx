import AccountsComponent from "./components/Accounts/AccountsComponent"
import BalanceComponent from "./components/Balance/BalanceComponent"
import LastActivityComponent from "./components/LastActivity/LastActivityComponent"

function HomeView() {
  return (
    <section className="d-flex flex-column px-3 px-sm-5 py-5" >
      <BalanceComponent />
      <AccountsComponent />
      <LastActivityComponent />
    </section>
  )
}

export default HomeView