import React, { useState } from "react";
import "./matching.css";
import Pagination from "../../../components/base/pagenation";
import Loading from "../../../components/base/Loading";
export default function HistoryPage() {
  const [totalCount, setTotalCount] = useState(0);
  const [historyList, setHistoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="matching-main">
      {isLoading && (
        <div
          style={{
            position: "fixed", // 確保 Loading 覆蓋整個畫面
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // 透明度
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // 確保 Loading 在最上層
          }}
        >
          <Loading />
        </div>
      )}
      <div className="matching-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            d="M9 6.78512C8.36422 6.78512 7.74272 6.97365 7.21408 7.32687C6.68545 7.68009 6.27343 8.18214 6.03013 8.76952C5.78683 9.35691 5.72317 10.0033 5.8472 10.6268C5.97124 11.2504 6.2774 11.8232 6.72696 12.2727C7.17652 12.7223 7.74931 13.0284 8.37287 13.1525C8.99643 13.2765 9.64278 13.2129 10.2302 12.9696C10.8175 12.7263 11.3196 12.3142 11.6728 11.7856C12.026 11.257 12.2146 10.6355 12.2146 9.99968C12.212 9.14791 11.8725 8.33175 11.2702 7.72945C10.6679 7.12716 9.85177 6.78766 9 6.78512ZM15.9402 9.99968C15.9386 10.3001 15.9166 10.6 15.8743 10.8974L17.8308 12.4291C17.916 12.4994 17.9734 12.5978 17.9928 12.7066C18.0122 12.8154 17.9922 12.9275 17.9365 13.023L16.0857 16.2183C16.0294 16.3128 15.9416 16.3846 15.8377 16.4208C15.7338 16.457 15.6204 16.4555 15.5175 16.4164L13.2171 15.4922C12.7381 15.861 12.2139 16.1672 11.6572 16.4031L11.3133 18.8454C11.294 18.9548 11.2374 19.0541 11.153 19.1263C11.0687 19.1986 10.9618 19.2393 10.8508 19.2416H7.14921C7.04018 19.2394 6.93509 19.2004 6.85109 19.1309C6.76709 19.0613 6.70915 18.9653 6.68672 18.8586L6.34276 16.4164C5.78458 16.1832 5.26 15.8765 4.78289 15.5046L2.48247 16.4288C2.37964 16.468 2.2663 16.4696 2.16238 16.4334C2.05847 16.3973 1.97062 16.3256 1.9143 16.2311L0.0635113 13.0362C0.007802 12.9408 -0.0121561 12.8287 0.00720345 12.7199C0.026563 12.6111 0.0839787 12.5127 0.16919 12.4424L2.12565 10.9106C2.08392 10.6087 2.06191 10.3044 2.05976 9.99968C2.06143 9.69932 2.08344 9.39941 2.12565 9.10202L0.16919 7.57028C0.0839787 7.49992 0.026563 7.40155 0.00720345 7.29275C-0.0121561 7.18396 0.007802 7.07182 0.0635113 6.97639L1.9143 3.78111C1.97056 3.68652 2.05838 3.6148 2.1623 3.57857C2.26622 3.54233 2.37959 3.54391 2.48247 3.58301L4.78289 4.5072C5.26191 4.13833 5.78612 3.83221 6.34276 3.59627L6.68672 1.15401C6.70597 1.04461 6.76261 0.945296 6.84697 0.873032C6.93133 0.800769 7.03816 0.760042 7.14921 0.757812H10.8508C10.9598 0.759935 11.0649 0.798955 11.1489 0.868505C11.2329 0.938054 11.2909 1.03402 11.3133 1.14075L11.6572 3.58301C12.2161 3.81606 12.7414 4.12268 13.2191 4.49474L15.5175 3.57056C15.6204 3.53141 15.7337 3.52978 15.8376 3.56594C15.9415 3.6021 16.0294 3.67373 16.0857 3.76825L17.9365 6.96353C17.9922 7.05896 18.0122 7.1711 17.9928 7.2799C17.9734 7.38869 17.916 7.48706 17.8308 7.55742L15.8743 9.08916C15.9161 9.39091 15.9381 9.69507 15.9402 9.99968Z"
            fill="#252525"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1.53906 3.61719C1.53906 2.51262 2.43449 1.61719 3.53906 1.61719H8.4624C9.56697 1.61719 10.4624 2.51262 10.4624 3.61719V8.54052C10.4624 9.64509 9.56697 10.5405 8.4624 10.5405H3.53906C2.43449 10.5405 1.53906 9.64509 1.53906 8.54052V3.61719Z"
            fill="#252525"
          />
          <path
            opacity="0.4"
            d="M13.4609 15.5391C13.4609 14.4345 14.3564 13.5391 15.4609 13.5391H20.3843C21.4888 13.5391 22.3843 14.4345 22.3843 15.5391V20.4624C22.3843 21.567 21.4888 22.4624 20.3843 22.4624H15.4609C14.3564 22.4624 13.4609 21.567 13.4609 20.4624V15.5391Z"
            fill="#252525"
          />
          <circle cx="17.9226" cy="6.07885" r="4.46166" fill="#252525" />
          <circle cx="6.00073" cy="18.0007" r="4.46166" fill="#252525" />
        </svg>
      </div>
      <div className="matching-body-header-background">
        <div className="matching-body-header">
          <img src={"/icon/headIcon.svg"} alt="history-header" />
          <p className="matching-body-header-title">媒合通知</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F3CCD4",
          borderRadius: "40px 0 0px 0",
          width: "100%",
          border: "none",
        }}
      >
        <div className="matching-body-layoff">
          <span className="matching-body-layoff-title">新配對</span>
          <div className="avatar-container">
            {historyList.map((avatar) => (
              <div className="avatar" key={avatar.id}>
                <img src={avatar.imgSrc} alt="avatar" className="avatar-img" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="avatar-name">{avatar.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M2.05313 5.15243H6.26773C6.27104 5.16807 6.27439 5.18369 6.27778 5.1993C6.29145 5.26223 6.30581 5.32523 6.32083 5.38827H3.34287C2.74509 5.38827 2.27052 5.88025 2.27052 6.47464C2.27052 7.06903 2.74509 7.56101 3.34287 7.56101H7.05359C7.087 7.6403 7.12077 7.71895 7.1548 7.79685H4.63262C4.03483 7.79685 3.56026 8.28883 3.56026 8.88322C3.56026 9.47761 4.03483 9.96959 4.63262 9.96959H8.2429C8.29443 10.0614 8.34424 10.1489 8.39192 10.2316C8.5502 10.5064 8.68564 10.7302 8.78353 10.8885L8.77928 10.8914L8.9476 11.1485L8.94797 11.149L8.95023 11.1525L8.95047 11.1529L8.95133 11.1542L8.95161 11.1546L9.12455 11.4188L9.25342 11.6156L9.47973 11.5513L9.77996 11.466L9.78013 11.466L9.78037 11.4659L9.78186 11.4655L9.78238 11.4653L9.78631 11.4642L9.78699 11.464L10.0849 11.3794L10.0834 11.3742C10.2587 11.3193 10.5029 11.2402 10.7959 11.1381C11.4026 10.9267 12.2256 10.6148 13.0841 10.2137C13.9388 9.81427 14.851 9.31619 15.6239 8.72688C16.3842 8.14725 17.0861 7.42213 17.4057 6.54461C17.7238 5.6714 17.6884 4.70544 17.307 3.85864C16.9257 3.01195 16.2291 2.35234 15.3685 2.0268C14.7538 1.79291 14.0862 1.74194 13.4439 1.88003C13.1953 1.93349 12.9545 2.01441 12.7256 2.12056C12.569 1.76478 12.3541 1.43525 12.0872 1.14712C11.545 0.561703 10.8209 0.182691 10.0356 0.0748638C9.2503 -0.0329701 8.45283 0.137176 7.77675 0.556055C7.10198 0.974133 6.58948 1.61429 6.32323 2.36881C6.25143 2.56679 6.19949 2.77131 6.1643 2.97969H2.05313C1.45534 2.97969 0.980776 3.47167 0.980776 4.06606C0.980776 4.66045 1.45534 5.15243 2.05313 5.15243Z"
                      fill="url(#paint0_linear_427_32992)"
                      stroke="white"
                      stroke-width="0.640011"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_427_32992"
                        x1="1.7307"
                        y1="3.84711"
                        x2="14.0321"
                        y2="8.08445"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E5941E" />
                        <stop offset="0.786533" stop-color="#F1C467" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="matching-body-layoff-content-background">
          <div className="matching-body-layoff-content">
            {totalCount === 0 ? (
              <div className="space-layout">
                <img
                  src="/icon/spaceIcon.png"
                  className="space-icon"
                  alt="space icon"
                />
                <span className="matching-body-layoff-content-title">
                  尚無資料
                  <br />
                  趕緊配對保母吧！
                </span>
              </div>
            ) : (
              <>
                <span className="matching-body-layoff-content-title">
                  已配對，待社工聯繫...
                </span>
                {historyList.map((avatar) => (
                  <div className="nanny-layout" key={avatar.id}>
                    <div className="nanny-avatar">
                      <img
                        src={avatar.imgSrc}
                        className="nanny-avatar-icon"
                        alt="nanny avatar"
                      />
                    </div>
                    <div className="nanny-intro">
                      <span className="nanny-intro-name">{avatar.name}</span>
                      <span className="nanny-intro-exp">{avatar.age}岁</span>
                    </div>
                    <div className="status">
                      <span className="status-content">已配對</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F3CCD4",
              width: "100%",
            }}
          >
            <Pagination totalItems={10} pageSize={5} currentPage={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
