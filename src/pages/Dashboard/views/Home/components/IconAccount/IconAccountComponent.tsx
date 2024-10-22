interface IconAccountProps {
  tipoCuenta: number;
}

function IconAccountComponent({ tipoCuenta }: IconAccountProps) {
  switch (tipoCuenta) {
    case 1:
      return (
        <div
          className="me-5 pb-3 align-items-end"
          style={{position: "absolute", bottom: 0, right: 0, width: "auto"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="82"
            viewBox="0 0 113 82"
            fill="none"
          >
            <g filter="url(#filter0_f_2_12)">
              <rect
                x="3.79907"
                y="30.8524"
                width="77.2083"
                height="44.5851"
                transform="rotate(-20.5114 3.79907 30.8524)"
                fill="#1C1C1C"
              />
              <path
                d="M71.4197 3.23261L6.96777 27.3448C5.38502 27.937 4.10479 29.1402 3.40872 30.6898C2.71265 32.2395 2.65776 34.0086 3.25611 35.608L15.8904 69.3794C16.4887 70.9788 17.6913 72.2774 19.2336 72.9897C20.7759 73.702 22.5315 73.7695 24.1142 73.1773L88.5662 49.0651C90.1489 48.473 91.4292 47.2697 92.1252 45.7201C92.8213 44.1704 92.8762 42.4013 92.2778 40.8019L79.6436 7.03059C79.0453 5.43118 77.8427 4.1325 76.3004 3.42024C74.7581 2.70798 73.0025 2.64049 71.4197 3.23261ZM5.64322 34.715C5.28421 33.7553 5.31714 32.6939 5.73479 31.7641C6.15243 30.8343 6.92057 30.1123 7.87022 29.7571L12.6039 27.9862C13.786 28.7247 14.6957 29.8344 15.1917 31.1428C15.79 32.7422 15.7351 34.5113 15.0391 36.061C14.343 37.6107 13.0628 38.8139 11.48 39.406C10.1809 39.8854 8.75818 39.9179 7.43277 39.4985L5.64322 34.715ZM27.9454 68.9942L23.2118 70.7651C22.2621 71.1204 21.2088 71.0799 20.2834 70.6525C19.358 70.2252 18.6365 69.446 18.2775 68.4863L16.4879 63.7028C17.2125 62.5164 18.3073 61.6071 19.602 61.1161C21.1848 60.524 22.9404 60.5915 24.4827 61.3038C26.0249 62.016 27.2275 63.3147 27.8259 64.9141C28.3105 66.2268 28.3525 67.6611 27.9454 68.9942ZM89.8907 41.695C90.2498 42.6546 90.2168 43.7161 89.7992 44.6459C89.3815 45.5757 88.6134 46.2976 87.6637 46.6529L82.9301 48.4238C81.748 47.6852 80.8383 46.5756 80.3423 45.2671C79.7439 43.6677 79.7988 41.8986 80.4949 40.3489C81.191 38.7993 82.4712 37.5961 84.054 37.0039C85.353 36.5245 86.7758 36.492 88.1012 36.9115L89.8907 41.695ZM87.0525 34.1085C85.7307 33.9719 84.3973 34.1371 83.1515 34.5917C80.9357 35.4207 79.1433 37.1052 78.1688 39.2747C77.1943 41.4442 77.1175 43.921 77.9552 46.1602C78.4347 47.4116 79.187 48.54 80.1563 49.4615L30.7193 67.9565C30.8456 66.625 30.6726 65.2799 30.213 64.0211C29.3753 61.7819 27.6917 59.9637 25.5325 58.9666C23.3733 57.9694 20.9154 57.8749 18.6996 58.7039C17.4613 59.1786 16.3469 59.9292 15.4393 60.8998L8.48142 42.3015C9.80328 42.438 11.1366 42.2729 12.3824 41.8183C14.5983 40.9893 16.3906 39.3047 17.3651 37.1352C18.3396 34.9657 18.4165 32.4889 17.5788 30.2498C17.0993 28.9984 16.3469 27.87 15.3777 26.9484L64.8147 8.45348C64.6883 9.78492 64.8614 11.13 65.321 12.3889C66.1587 14.628 67.8423 16.4462 70.0015 17.4434C72.1607 18.4405 74.6185 18.535 76.8344 17.706C78.0727 17.2313 79.187 16.4808 80.0947 15.5101L87.0525 34.1085ZM79.046 12.7071C78.3214 13.8935 77.2267 14.8028 75.9319 15.2938C74.3492 15.8859 72.5936 15.8184 71.0513 15.1062C69.509 14.3939 68.3064 13.0952 67.7081 11.4958C67.2235 10.1831 67.1815 8.74883 67.5885 7.41576L72.3222 5.64485C73.2718 5.28958 74.3252 5.33007 75.2506 5.75742C76.1759 6.18478 76.8975 6.96399 77.2565 7.92364L79.046 12.7071ZM44.3173 32.6209L46.7044 31.7279C47.3375 31.491 48.0398 31.518 48.6567 31.8029C49.2736 32.0878 49.7546 32.6073 49.994 33.247C50.1136 33.5669 50.3542 33.8267 50.6626 33.9691C50.9711 34.1116 51.3222 34.1251 51.6388 34.0066C51.9553 33.8882 52.2114 33.6476 52.3506 33.3376C52.4898 33.0277 52.5008 32.6739 52.3811 32.354C51.9024 31.0745 50.9403 30.0355 49.7065 29.4657C48.4727 28.8959 47.0682 28.8419 45.802 29.3156L45.3508 28.1095C45.2311 27.7896 44.9906 27.5299 44.6821 27.3874C44.3737 27.245 44.0225 27.2315 43.706 27.3499C43.3894 27.4683 43.1334 27.709 42.9942 28.0189C42.855 28.3288 42.844 28.6827 42.9636 29.0025L43.4149 30.2087C42.1487 30.6824 41.1245 31.645 40.5676 32.8847C40.0108 34.1244 39.9669 35.5397 40.4455 36.8192C40.9242 38.0988 41.8863 39.1377 43.1201 39.7075C44.354 40.2773 45.7584 40.3313 47.0246 39.8576L49.4118 38.9646C50.0449 38.7277 50.7471 38.7547 51.364 39.0396C51.9809 39.3245 52.462 39.844 52.7013 40.4838C52.9407 41.1235 52.9187 41.8312 52.6403 42.451C52.3618 43.0709 51.8497 43.5522 51.2167 43.789L48.8295 44.6821C48.1964 44.9189 47.4942 44.8919 46.8773 44.607C46.2604 44.3221 45.7793 43.8027 45.54 43.1629C45.4203 42.843 45.1798 42.5833 44.8713 42.4408C44.5629 42.2984 44.2118 42.2849 43.8952 42.4033C43.5787 42.5217 43.3226 42.7624 43.1834 43.0723C43.0442 43.3822 43.0332 43.7361 43.1529 44.0559C43.6316 45.3355 44.5936 46.3744 45.8275 46.9442C47.0613 47.514 48.4658 47.568 49.732 47.0943L50.1832 48.3004C50.3029 48.6203 50.5434 48.8801 50.8519 49.0225C51.1603 49.165 51.5114 49.1785 51.828 49.06C52.1445 48.9416 52.4006 48.701 52.5398 48.391C52.679 48.0811 52.69 47.7273 52.5703 47.4074L52.1191 46.2013C53.3853 45.7276 54.4095 44.765 54.9663 43.5253C55.5232 42.2855 55.5671 40.8702 55.0884 39.5907C54.6097 38.3112 53.6477 37.2722 52.4138 36.7024C51.18 36.1326 49.7755 36.0786 48.5093 36.5523L46.1222 37.4454C45.4891 37.6822 44.7869 37.6552 44.1699 37.3703C43.553 37.0854 43.072 36.5659 42.8326 35.9262C42.5933 35.2864 42.6153 34.5788 42.8937 33.9589C43.1721 33.339 43.6842 32.8578 44.3173 32.6209ZM41.9011 22.5254C38.8323 23.6735 36.1764 25.7154 34.2693 28.3929C32.3622 31.0704 31.2896 34.2632 31.1871 37.5676C31.0846 40.872 31.9567 44.1396 33.6933 46.9572C35.4299 49.7747 37.9528 52.0157 40.9432 53.3967C43.9335 54.7777 47.2569 55.2367 50.4931 54.7157C53.7293 54.1947 56.7329 52.717 59.1242 50.4696C61.5154 48.2221 63.1869 45.3059 63.9272 42.0895C64.6675 38.8732 64.4434 35.5013 63.2832 32.4002C61.723 28.2452 58.5957 24.8722 54.5873 23.021C50.5789 21.1698 46.0166 20.9916 41.9011 22.5254ZM52.7304 51.4723C50.1337 52.4437 47.3043 52.6152 44.5998 51.9651C41.8953 51.3151 39.4374 49.8725 37.5367 47.82C35.636 45.7675 34.3781 43.1971 33.9218 40.434C33.4656 37.6709 33.8316 34.8391 34.9736 32.2967C36.1156 29.7543 37.9823 27.6155 40.3375 26.1508C42.6928 24.6861 45.4309 23.9613 48.2056 24.0679C50.9803 24.1746 53.667 25.108 55.9259 26.7501C58.1848 28.3922 59.9144 30.6692 60.8961 33.2932C62.2082 36.8122 62.0854 40.7025 60.5546 44.1106C59.0237 47.5187 56.2099 50.1662 52.7304 51.4723Z"
                fill="#157347"
              />
            </g>
            <g filter="url(#filter1_f_2_12)">
              <rect
                x="23.7555"
                y="34.7821"
                width="77.2083"
                height="44.5851"
                transform="rotate(-13.7977 23.7555 34.7821)"
                fill="#1C1C1C"
              />
              <path
                d="M94.1415 15.2572L27.3126 31.6691C25.6714 32.0721 24.2593 33.1174 23.3868 34.5751C22.5144 36.0327 22.253 37.7833 22.6603 39.4417L31.2598 74.4585C31.667 76.1169 32.7095 77.5472 34.158 78.4349C35.6064 79.3226 37.3421 79.5949 38.9832 79.1918L105.812 62.78C107.453 62.3769 108.865 61.3316 109.738 59.874C110.61 58.4163 110.872 56.6657 110.464 55.0073L101.865 19.9906C101.458 18.3322 100.415 16.9018 98.9667 16.0141C97.5183 15.1264 95.7826 14.8542 94.1415 15.2572ZM25.1355 38.8338C24.8911 37.8388 25.0479 36.7884 25.5714 35.9139C26.0949 35.0393 26.9421 34.4121 27.9268 34.1703L32.835 32.9649C33.9227 33.8366 34.6964 35.045 35.036 36.4024C35.4433 38.0608 35.182 39.8114 34.3095 41.2691C33.437 42.7267 32.0249 43.772 30.3838 44.1751C29.0376 44.4993 27.6208 44.3653 26.3535 43.7937L25.1355 38.8338ZM43.2772 75.4853L38.369 76.6906C37.3843 76.9325 36.3429 76.7691 35.4738 76.2365C34.6048 75.7039 33.9793 74.8457 33.7349 73.8506L32.5168 68.8907C33.3752 67.7972 34.5687 67.0221 35.912 66.6859C37.5531 66.2828 39.2888 66.5551 40.7373 67.4428C42.1857 68.3305 43.2282 69.7608 43.6355 71.4192C43.9633 72.7796 43.8373 74.2089 43.2772 75.4853ZM107.989 55.6152C108.234 56.6102 108.077 57.6606 107.553 58.5352C107.03 59.4098 106.183 60.0369 105.198 60.2788L100.29 61.4841C99.202 60.6125 98.4283 59.404 98.0887 58.0466C97.6814 56.3882 97.9427 54.6376 98.8152 53.18C99.6877 51.7223 101.1 50.677 102.741 50.274C104.087 49.9497 105.504 50.0838 106.771 50.6553L107.989 55.6152ZM106.057 47.7489C104.761 47.4588 103.417 47.4669 102.127 47.7728C99.8291 48.337 97.8521 49.8005 96.6307 51.8412C95.4092 53.8819 95.0433 56.3327 95.6135 58.6544C95.9434 59.9533 96.5587 61.1619 97.4136 62.1904L46.1533 74.779C46.4345 73.4714 46.4199 72.1153 46.1106 70.8114C45.5404 68.4896 44.0809 66.4871 42.0531 65.2443C40.0253 64.0016 37.5953 63.6204 35.2978 64.1847C34.0125 64.5114 32.818 65.1265 31.8031 65.9843L27.0673 46.7001C28.3641 46.9902 29.7076 46.9821 30.998 46.6763C33.2956 46.112 35.2726 44.6486 36.494 42.6079C37.7155 40.5672 38.0814 38.1164 37.5112 35.7946C37.1812 34.4957 36.566 33.2871 35.7111 32.2586L86.9714 19.6701C86.6902 20.9776 86.7048 22.3337 87.0141 23.6376C87.5843 25.9594 89.0438 27.9619 91.0716 29.2047C93.0994 30.4474 95.5294 30.8286 97.8269 30.2644C99.1122 29.9377 100.307 29.3225 101.322 28.4647L106.057 47.7489ZM100.608 25.5583C99.7495 26.6519 98.556 27.427 97.2127 27.7632C95.5716 28.1662 93.8359 27.8939 92.3874 27.0062C90.939 26.1186 89.8965 24.6882 89.4892 23.0298C89.1614 21.6694 89.2874 20.2401 89.8475 18.9637L94.7557 17.7584C95.7404 17.5166 96.7818 17.6799 97.6509 18.2125C98.5199 18.7451 99.1454 19.6034 99.3898 20.5984L100.608 25.5583ZM63.7892 41.2754L66.2643 40.6676C66.9208 40.5064 67.615 40.6153 68.1944 40.9704C68.7738 41.3254 69.1908 41.8976 69.3537 42.5609C69.4352 42.8926 69.6437 43.1787 69.9333 43.3562C70.223 43.5338 70.5702 43.5882 70.8984 43.5076C71.2266 43.427 71.509 43.218 71.6835 42.9264C71.858 42.6349 71.9103 42.2848 71.8288 41.9531C71.503 40.6264 70.669 39.4821 69.5103 38.7719C68.3515 38.0618 66.963 37.844 65.6501 38.1664L65.3429 36.9158C65.2615 36.5841 65.053 36.298 64.7633 36.1205C64.4736 35.943 64.1265 35.8885 63.7982 35.9691C63.47 36.0497 63.1876 36.2588 63.0131 36.5503C62.8386 36.8418 62.7863 37.192 62.8678 37.5236L63.1749 38.7742C61.862 39.0967 60.7323 39.9329 60.0344 41.099C59.3364 42.2652 59.1273 43.6656 59.4531 44.9923C59.7789 46.3191 60.613 47.4633 61.7717 48.1735C62.9304 48.8836 64.319 49.1015 65.6319 48.779L68.107 48.1712C68.7635 48.01 69.4578 48.1189 70.0371 48.474C70.6165 48.829 71.0335 49.4012 71.1964 50.0645C71.3593 50.7279 71.2548 51.4281 70.9058 52.0112C70.5568 52.5943 69.992 53.0124 69.3355 53.1736L66.8604 53.7814C66.2039 53.9426 65.5097 53.8337 64.9303 53.4787C64.3509 53.1236 63.9339 52.5514 63.771 51.8881C63.6895 51.5564 63.481 51.2703 63.1914 51.0928C62.9017 50.9153 62.5545 50.8608 62.2263 50.9414C61.8981 51.022 61.6157 51.2311 61.4412 51.5226C61.2667 51.8141 61.2144 52.1643 61.2959 52.4959C61.6217 53.8226 62.4557 54.9669 63.6144 55.6771C64.7732 56.3872 66.1617 56.6051 67.4746 56.2826L67.7818 57.5332C67.8632 57.8649 68.0717 58.151 68.3614 58.3285C68.6511 58.5061 68.9982 58.5605 69.3265 58.4799C69.6547 58.3993 69.9371 58.1902 70.1116 57.8987C70.2861 57.6072 70.3384 57.2571 70.2569 56.9254L69.9498 55.6748C71.2627 55.3524 72.3924 54.5161 73.0903 53.35C73.7883 52.1839 73.9974 50.7834 73.6716 49.4567C73.3458 48.13 72.5117 46.9857 71.353 46.2755C70.1942 45.5654 68.8057 45.3476 67.4928 45.67L65.0177 46.2778C64.3612 46.439 63.6669 46.3301 63.0876 45.9751C62.5082 45.62 62.0912 45.0478 61.9283 44.3845C61.7654 43.7211 61.8699 43.0209 62.2189 42.4378C62.5679 41.8548 63.1327 41.4367 63.7892 41.2754ZM62.5697 30.9667C59.3878 31.7482 56.5114 33.4655 54.3044 35.9017C52.0973 38.3379 50.6588 41.3834 50.1707 44.6532C49.6825 47.9229 50.1667 51.2701 51.562 54.2713C52.9572 57.2726 55.2009 59.7932 58.0093 61.5143C60.8177 63.2354 64.0646 64.0798 67.3395 63.9407C70.6144 63.8016 73.7702 62.6852 76.4078 60.7328C79.0454 58.7803 81.0463 56.0794 82.1576 52.9717C83.2688 49.864 83.4404 46.489 82.6508 43.2735C81.587 38.9646 78.8756 35.2491 75.111 32.942C71.3465 30.6349 66.8364 29.9245 62.5697 30.9667ZM69.9407 60.9811C67.2482 61.6423 64.4181 61.4819 61.8082 60.5201C59.1983 59.5582 56.9258 57.8383 55.2781 55.5776C53.6305 53.317 52.6816 50.6172 52.5515 47.8197C52.4215 45.0221 53.1161 42.2525 54.5474 39.8611C55.9788 37.4697 58.0827 35.5638 60.5931 34.3845C63.1035 33.2052 65.9075 32.8054 68.6507 33.2357C71.3939 33.666 73.9531 34.9071 76.0045 36.802C78.0559 38.6969 79.5075 41.1606 80.1756 43.8814C81.0674 47.5296 80.4906 51.3788 78.5718 54.5846C76.6531 57.7904 73.549 60.0908 69.9407 60.9811Z"
                fill="#157347"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2_12"
                x="0.843887"
                y="0.832605"
                width="93.8462"
                height="74.7447"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  result="effect1_foregroundBlur_2_12"
                />
              </filter>
              <filter
                id="filter1_f_2_12"
                x="20.4726"
                y="13.0752"
                width="92.1795"
                height="68.2987"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  result="effect1_foregroundBlur_2_12"
                />
              </filter>
            </defs>
          </svg>
        </div>
      );
    case 2:
      return (
        <div
          className="me-5 pb-3 d-flex align-items-end"
          style={{position: "absolute", bottom: 0, right: 0, width: "auto"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="67"
            viewBox="0 0 72 67"
            fill="none"
          >
            <g filter="url(#filter0_f_5_30)">
              <path
                d="M27.1874 1.55278L1.83229 19.6758L3.72049 26.7227L60.0952 11.6171L58.207 4.57026L27.1874 1.55278ZM12.2174 58.4334L68.5921 43.3279L70.4803 50.3747L14.1056 65.4803L12.2174 58.4334ZM61.9834 18.6639L61.0393 15.1405L4.66458 30.2461L5.60868 33.7695L9.1321 32.8254L13.8526 50.4425L10.3292 51.3866L11.2733 54.91L67.648 39.8045L66.7039 36.281L63.1805 37.2251L58.46 19.608L61.9834 18.6639ZM24.4228 47.6102L20.8994 48.5543L16.1789 30.9372L19.7024 29.9931L24.4228 47.6102ZM34.9931 44.7779L31.4697 45.722L26.7492 28.1049L30.2726 27.1608L34.9931 44.7779ZM45.5634 41.9456L42.0399 42.8897L37.3195 25.2726L40.8429 24.3285L45.5634 41.9456ZM56.1336 39.1133L52.6102 40.0574L47.8897 22.4403L51.4131 21.4962L56.1336 39.1133Z"
                fill="#1C1C1C"
              />
              <path
                d="M10.098 32.5666L9.83921 31.6007L8.87328 31.8595L6.31579 32.5448L5.88933 30.9532L60.3322 16.3653L60.7587 17.9568L58.2012 18.6421L57.2352 18.9009L57.4941 19.8669L62.2145 37.484L62.4734 38.4499L63.4393 38.1911L65.9968 37.5058L66.4232 39.0973L11.9804 53.6853L11.5539 52.0937L14.1114 51.4084L15.0773 51.1496L14.8185 50.1837L10.098 32.5666ZM24.6817 48.5761L25.6476 48.3173L25.3888 47.3514L20.6683 29.7343L20.4095 28.7684L19.4435 29.0272L15.9201 29.9713L14.9542 30.2301L15.213 31.196L19.9335 48.8131L20.1923 49.779L21.1582 49.5202L24.6817 48.5761ZM35.2519 45.7438L36.2179 45.485L35.959 44.5191L31.2385 26.902L30.9797 25.9361L30.0138 26.1949L26.4904 27.139L25.5245 27.3978L25.7833 28.3637L30.5038 45.9808L30.7626 46.9468L31.7285 46.6879L35.2519 45.7438ZM45.8222 42.9115L46.7881 42.6527L46.5293 41.6868L41.8088 24.0697L41.55 23.1038L40.5841 23.3626L37.0606 24.3067L36.0947 24.5655L36.3535 25.5314L41.074 43.1485L41.3328 44.1145L42.2988 43.8556L45.8222 42.9115ZM56.3924 40.0793L57.3584 39.8204L57.0995 38.8545L52.3791 21.2374L52.1202 20.2715L51.1543 20.5303L47.6309 21.4744L46.665 21.7332L46.9238 22.6991L51.6443 40.3162L51.9031 41.2822L52.869 41.0234L56.3924 40.0793ZM58.8705 10.91L4.42759 25.4979L2.97758 20.0864L27.4638 2.58439L57.4204 5.49847L58.8705 10.91ZM67.885 44.5526L69.2555 49.6676L14.8127 64.2555L13.4421 59.1405L67.885 44.5526Z"
                stroke="#934400"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5_30"
                x="0.832306"
                y="0.55278"
                width="70.648"
                height="65.9275"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_5_30"
                />
              </filter>
            </defs>
          </svg>
        </div>
      );
    case 3:
      return (
        <div
          className="me-5 pb-3 d-flex align-items-end"
          style={{position: "absolute", bottom: 0, right: 0, width: "auto"}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="60"
            viewBox="0 0 71 60"
            fill="none"
          >
            <g filter="url(#filter0_f_7_43)">
              <rect
                x="3.79431"
                y="20.859"
                width="54"
                height="37"
                transform="rotate(-18.422 3.79431 20.859)"
                fill="#1C1C1C"
              />
              <path
                d="M50.8262 2.0315L6.09914 16.9292C4.48155 17.468 3.14495 18.6295 2.3834 20.1581C1.62184 21.6867 1.4977 23.4572 2.03828 25.0802L11.5503 53.6378C12.0909 55.2607 13.2519 56.6032 14.7779 57.3699C16.304 58.1365 18.0701 58.2645 19.6877 57.7257L64.4147 42.828C66.0323 42.2892 67.3689 41.1277 68.1305 39.5991C68.892 38.0705 69.0161 36.3 68.4756 34.677L58.9636 6.11946C58.423 4.49648 57.262 3.154 55.7359 2.38736C54.2098 1.62072 52.4437 1.49271 50.8262 2.0315ZM7.45799 21.0089L52.185 6.11115C52.7242 5.93155 53.3129 5.97422 53.8216 6.22977C54.3303 6.48531 54.7173 6.93281 54.8975 7.4738L56.2563 11.5534L7.46323 27.8055L6.10437 23.7259C5.92418 23.1849 5.96556 22.5947 6.21941 22.0852C6.47327 21.5756 6.9188 21.1885 7.45799 21.0089ZM63.0559 38.7483L18.3288 53.6461C17.7896 53.8257 17.2009 53.783 16.6923 53.5274C16.1836 53.2719 15.7966 52.8244 15.6164 52.2834L10.1809 35.9648L58.974 19.7127L64.4095 36.0313C64.5897 36.5723 64.5483 37.1625 64.2944 37.672C64.0406 38.1816 63.595 38.5687 63.0559 38.7483Z"
                fill="#029DAF"
              />
              <path
                d="M56.6014 33.8363L38.575 39.8405L40.1551 44.5843L58.1815 38.5801L56.6014 33.8363Z"
                fill="#029DAF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_7_43"
                x="-1"
                y="-1"
                width="72.5139"
                height="61.7572"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.5"
                  result="effect1_foregroundBlur_7_43"
                />
              </filter>
            </defs>
          </svg>
        </div>
      );
  }
}

export default IconAccountComponent;
