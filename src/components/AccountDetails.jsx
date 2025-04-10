import React from "react";

function AccountDetails() {
  return (
    <>
      <div className=" w-11/12 grid grid-cols-1 place-items-center mx-auto my-10 gap-4">
        <div className=" h-64 bg-white rounded-xl p-5 w-full place-items-center">
          <h1 className=" my-4">Account balanace</h1>
          <div className="my-4 flex gap-6">
            <div>Deposit</div>
            <div>Withdraw</div>
          </div>
        </div>
        <div className=" h-64 bg-white rounded-xl p-5 w-full place-items-center">
          <h1>Loan Proposals</h1>
          <div>
            <ul>
              <li>Loan 1</li>
              <li>Loan 2</li>
              <li>Loan 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetails;
