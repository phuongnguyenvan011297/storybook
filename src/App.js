
import { Page } from "./pages/home/Page";

function App() {
  

  return (
    <div className="App">
      {/* <Button label="Loggin" primary onClick={showModal} />
      <StoryModal label="Login" isOpen={isModalVisible} onClose={handleClose}>
        <StoryForm label="Login">
          <Title label="User Name" />
          <Input
            placeholder="username"
            value={userName}
            onChange={handleChangeName}
          />
          <Title label="Pasord" />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChangePassword}
          />
        </StoryForm>
      </StoryModal> */}
      <Page />
      
    </div>
  );
}

export default App;
