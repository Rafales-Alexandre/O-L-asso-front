import React from "react";





function DataView(){
    <Routes>
        <Route path="/" element={<UserView user={loggedInUser} />} />
        <Route path={`/${loggedInUser.id}`} element={<UserEdit data={[loggedInUser]} onSubmitFormUser={() => {}} />} />
        <Route path="/instuments" element={<Instruments data={instruData} />} />
        <Route path="/suits" element={<Suits data={suitsData} />} />
        <Route path="/users" element={<Users data={userData} />} />
    </Routes>
}

export default DataView;