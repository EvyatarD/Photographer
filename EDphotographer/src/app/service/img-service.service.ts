import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {
  imgs: string[];
  panorama: string[];
  evyatar: string;
  icon: string;
  isShow: boolean;

  constructor() {
    this.imgs = [
      "https://lh3.googleusercontent.com/s5eSSBlB4IRr7sFRAgxEMP3rSznftpkU-G0I7Kwn2Ndpia0nYzMMV-baVouxPELatM9L4XcAyLWycERLomcXgkfhJ5Y2NUC6dFV8xIB1CDmO8ZBUOrRK2ZkJl-KXCnt53Pi5XufrvMoirkqYTIweYG7e3_5Yje6rkelbk3Nb6r-GTFGRoyX1ZpFSrth7AEMz4hifNkflo5UuPyIF4EYWRQilKG70WqKwAQKfyOZ5jYGfW_4IBG78TXL-t1K1m2we_qbz27hDLXd5TfEU1uhMXuON0bwJALGy-26nOvquT8pWTw7vRz-PawjHsg0Jz5N_if1mEuxuJ6sO-oIV7bzkR5apBmpYrhe4pi-cE_wQovCljy0PNko10d_i4kO50undcrebBUyVvy4_FdxUNPtihYN84cftaR5CywNjSRmunp4V0oAsNaKoBtG2fyJNrEe0X1VBcJOlSrLvJ-IR8Ab7iUMiD6cz2BVGr8RYqB5ehdVOaJMSeNr0ooxenGkxe0Cpnpp3hjzUXYCnEx-DmHPkknYK-1GfkYwZHc4oKIMGuNIH9kVgcKl7do11fndYOEul-JRFvJWOjErGFEBk7N_tjBmAKxHlxqpfKb16WDfwZ6EyIFmnUN3ZkRBUvHYFLGK8Th1sGvJp-s6AYkZpACLLeqdvvJslMoj_AHLQTqtrxxkbn8VCMgQPHmA=w847-h694-no",
      "https://lh3.googleusercontent.com/g8VgVOzwRJihJPYxbHwoKRMqds7_TumJfBhW01Mc5Wfi1O2U-dfNPafN78DnQAswFqKY1FfqbIH4ZfCW0v8bovAM6DQdptUb5y6Y1fdk6Wzv4BF0VFQHWHMjhJ5tqxPyBSmXFb8ORdYsgmFYmn1JhPCe2sdzutFZYB7KoHovDpAnaLi20_McEtW1RgbZ5j7CV2oh0Lu6_i8Nxu7VRBmzIIPkPt1PaSEe5SnIlo4tmqBIw7Bnpw52QFiuOtrodWOsQSjBKal3PCWlOOCCHj3zz4NgHZLGv9sSpOlrdcJXyU91P6r3lK8-mvTuXvuzvjqOhGiVfwAXIbxoxbs1cs4k_oZ5A8w-u3OJVhqchjZzHvfS8oZPWDc3UKK3wur1FwMTODXaht-v0Kytyz0nZmEK3yQtoEDc2FX8tfB6Dj3B3LTAFWchcLXTIwuDf44V43qsBuHg4f6q9AeE2-6j-i_VSGzcsER_nEPFpzXNEZP6Epm8JqeXskI6rgzVP1P93CWvjdM_bLrG3YnSA_DsxT3Nl7Vuq2vxejW8Tsj5UTzAZ2B1CR8LdNL3ucMio0vHCRkvmpNni3Yu2-qbztEYvVZzumTnDKHbuQyhSx4A5xjdQUxjGxr09nfbaXPi_04gic_d63JskjYdqHUs5oxmUvN_PfQpHbTxQ_hwQkGGNzx9TbqaSBOR990u4ng=w1442-h694-no",
      "https://lh3.googleusercontent.com/7dhFpzXECm4rjO1tRBQ-ZM3i3BEpvvaE-vIUgOIZ0wEYx3L39t3YCBvj7Ooa1FIWxJWbz_1pu6fnLf14ZOTjP6TWZI49yvBaBu9YZeRetrHlqs7bSY961fl08E_CPpNqwJ50VL1WJrTTjQ0r2You-IzAf9KOvEX74OHjnSEBFCqPb9xcDp8gNiNBqf-P5A0od2sow2Nv9b9an8NSBe1WnUOTgNHF4eJq378votZhAcBKTN3gOUy9dWubbEIdTfryjzEnAif9h1PLtWZLXRlpKSjf0Xupbs9agevJVrso1aHZIB1EbXSlI0SrSH10ioK0jsEYSRj9TpfRV9J5QQVZVOjZk1a-K86nowM9ZhnWW4BKgVTHE1vat3Orf29VLSEuhjvPKojNFb-6-NfBotPUddzJBUG4qOWao1lQD6a8JowWwvyOVJZRaWIlH6KpIvW56Szc25rv_63eTuG5NLdvwhldAdcOZIjojBDRbbse2GnTJg0GgfBV97dIxgmHajCxAxN4HmBQR84zluYZaWRI3fBx7VbWftfD_Oy0HscwZwHwg1sC5l7vSd--ARhmZh1gTiOGDUwmI-fFs-58s7FrkQiGLFtIhlP32R4YmNV55LVVRQ9ZhTqW53qoarWZVZTf0r3sNEuB0XMwDsjNU53-qdsmYm17Mxl5zeJk8fuvuD7QCuNHEyjQ-0E=w991-h694-no",
      "https://lh3.googleusercontent.com/3mtqFUDPjpdcxyms9mb_kd0Os-tkxZFagSwvZNVFy0DpvnQH7981OsNtAwHgsQvc594XXVN8kdut71Gy-gJZIbgV4TRzCbkaZPGYcdrLGGPUGBiJgnWcf6tnA7krz9yDhy8Pszla5OMZFgQHneyhLGLLDUAkKwfbn4YsZw18isU5UgbwiFJPA7DIgzWSSMLaQQWbePvBdnmlZqk6aUhw0aCdKIoQq8gpB9CNykSAtr18VexzQ_ZalfKQ99DQfG0X8yNqc9riTWs078n1-UqK9VmEsWgjkowGyNiGj79N_-X0AyUOhR1GsxEgF1ydR3hi7fI1FhVDov_cxJxmw1tqtqczMzQRTEpKgFU3kihzzz_OcF56SKv_cVUq4ALux5DxcIg9mCAzI39Jihtn7rTZl6TGSVqEKwuVUPm_Z6Nc0eqLbssNqzBwMKMjKRs7MrhRG6EUEnA9zI_mBBxWJjvDsxf4zCtU2cX5xpkgDZUqVkXNzRvAvBVv8P2rGROI2-zAceAaK2kUcXreVl7-xctKQCfCx5-2jGwQ8f1jdP31G8Fc0TdGNn4er0Q-RSihAir7ns7YmR7elB8cuTiEcVAy8p6lz6CEznHhbSkZHf5OSetdXkymrj7e7wWYkofZvti1Tgd2_OP2kPsXmrwX7eW1I_iNDX0IIF1aCJ0-GDA9bUGVCNOylwpiGDY=w542-h694-no",
      "https://lh3.googleusercontent.com/y0uikSdzLRhixrtWWPmM7DfR6_S-_TWLgZ1xusFLCou3-65sD3-ioCwvNNd41mIbBLWE3CLtQ4d7iVKIdr9jJPC0b4q7E14ppp1_RXi_rouhPdIJK2S3LGV3sWjqTN0owJ00oh6FxVU1h5_mWNQFYCpTlvahhzfUYSv0izEiSlV3DR3NJuU6SZJxjXVLOqFqcoirN0LKfE0Ao0ojG6dzrt9KrKAuuXI6hEi2aixC5V1g06fYEChRphTuXqdvH4CHxjAca39Xw0rEk5aMooY2yomcEUOXY4kz3yX7w88NLAWN2vPG2211fUZWq2rkFmtrqiCWNye2q2Vl0Jw4Q2DlxIStNXsiTQI_OIIRx4kTkazq4WOrB6Dmf2U7j73IYX25zYUx7GMnF2KFk7PEZPPTy_dTGpZ3H7lzymJvNvKfzegiI1MaGOZzYFn0penNZ5QG4v-shkszPf9irL4hD_hwo9fZtG-i0Qlrm6O55aJapR4H6kEufrIq5KF5qxsY1_bcF0ceoCYPHZAvvQnrtXvD1VUQeZkQQOMldH021sVOQb-Cn_w2Wjcud_mz4D1r6OskELlU540UCeDDM8xE0QIaHKNVYUUa9kGQAOAY8ugsuWWwDi-UPiKsoSIuZhHbjHbU92EDVM8Is2SsYbJggE2R-zhP8EUuvplEAciMXNRCgHN8Wefja93_p7c=w829-h694-no",
      "https://lh3.googleusercontent.com/3MLy2sDdH3xjlhBwqpaurmIREfdusI_Y8cI3ta5A5tCBSFxI9aWaebO2urFQjfGW35H9jcxQZ7-Ah4H9j1lChuN7nLrgusUhRXZyQkltgCJyCXfc-bb3Rfv9c3z5lc1EufRn8B0rnWNagDO8P1OpWH2Cn_c5yb5gJskfWwgVIHMqBsCL3gBgRUMA5TBeZgiwB15Tc62EcbV7Cgw7zgCMSGPREOOkYfW3cE1cAjKFUMT02kaWQ6k9IotBMgjGhForcB373XgKVLQ6TtOmGIhNp6_sckmVtIAT7lrPc97PVLOijX4qUEX0yqUNMTX0yWda8EihlpEyI0IKUg8831mMKhThy28V0RkvAkJL63zXeCAw_irqnRx1jsuVyZ1GFeKg26VUDn9FB9Bi6NwbPwemLQgUa_WvigWxQk1HgeZemB3vEOIKhuOritMO_piUgmLzWZsQwjRB9IzXStnN6psEH1gVVTU8Q4lnEvrlBSG6QHnmP3rnqwbAgQcFWFYPappcj4vjLG8mRWtahvSihEsw1STipGzNKPayLH9wZA-HPEXq3EjTtCNZm4AYHIZRVhdmiKgVKQb3buqrnS9nd4Cfx7Q5Ud2OiYqCkx8Q-BPlfrVqeWJdAPEdukvhA69tKtHO21CQw4xrhbDG186D2BZYPKltsqL9cIU8sUTJl1qJ-T2yS7rvLofcjjk=w1234-h694-no",
      "https://lh3.googleusercontent.com/vS_zDWxa4Tioajcc--3cww9cCysmozCfyF5hx5eX5w8bpF4LTtX0Wh_vLBolgQr4qf4duPMa9FmA3bR4969ObZQzRpM_801hrMKBrxWSbwkrGlFj0lOBFWTsG6mwtRpBZEbngF9cxSBhC3QTap-SZC1VhTc6txb9XkZBtpCSlNCSC4xCA2EOTN5nRzDpMlrLXOQTz73tdAf6HabWvHPzI3S42nEn_eX0Jb-Ijafhs_Gi2DrzDvau7tADcuoKn-3WVOZGHxWqhnAQZD3vnQOCTUXmbisVDYgrob7ubiIRTfUIYASMeDjGD4XVIIoQ8PEH0MfPIqpqoyP7r3OnPzlzIzs6gdUlO5tA3Yh3R4vsdnkv8EHT27vW1bJ3a3UbYAedEFrSqw6i-ZlgH-RbLr-TfLzKuC7KMsw9Ir_u7jfTOGJdXs0-rycr2FKoeVd3OLOfHpe7xk7jV7sYus3l2Asdyjqnrr-nka9KrvP68tD0nfeQo4_w65Il4xMQ1j3j0KJgQJz90CG2UADvUIthVmRBQBJje2nX52l53agaUHeJbxv1TWpto1mvYGZpGhUnpgwLIMs58WtFYL230-oDvmhbTazMmEhjDiko17NHZsNIF9ma3b9Sfmo-S6iLn85MXnY7xEgut-Tbj7FwvKAiT9Wovlgg-idhVSKobScVtOhstHN8WBkvHUA7dn8=w1234-h694-no",
      "https://lh3.googleusercontent.com/GABRtc2b5OiGF2IqWNxQgxSK_BaAlkuDWdnzt3y6iwCofpMyB5Du7Uy1HZXP4-PZdeGThZvkaMcR8pbzH1NEDMwPcXgFkqmcKuXTFbYFZfwMLHsLSHpAxf3_C0pbhWqnN5YtZL2o3ketSJICNNXDPSdY0jJtxakO72XXL9Eh44YM2P8nTqSVJRoh6jTIOACyw2JjSZEZKpQtEJMtn4gSILHWWmSkGK9xxP_ByQ0J13hDwR7tKzX0hCOvKc7iyYcJVQEOeVaJNlhDjCa9heCQw1l_C7obqGJRrGpQbBnk-3RtMje_tBN5QFjJo1wENBLLTZV5FP_YluE5tMuH9qowsO8BSP-teG7bG840wYZUCiDlq0xO1M_gUYxpUl-D1WSUruATtgZzKGRsvxB21wd57W8jXCksodaulvLxAXZYfhfS-N_ZKuLT65M218t-NLZMH6MSxGngYzLgbLMFeH94dzt7jDZ15zCUV8mWJFW5HtJw3F6c-Gh2ggKsjUviFsa17e4bsvIonXc2bydb6X8N-fmK1XGThPTcM2oNrkAX-4JezqsHZZH5yJpB1mHTeCyrcowbmUC-t3NznWXVZ3tvO3bvQzhVnVbj9B1rZPwloTST0p6e7cmysLby9k1dyovYvFWhNFLnUfgMl46IPOEJsA-6Ol-ICxyZaYae-XwgTHclFF1FiOm2ep4=w391-h694-no",
      "https://lh3.googleusercontent.com/GmzMt19DP7K5n4O9gVYH4BtgAnepg_aXl0_0QQyLdLz1Taa5chg_BBpkCexxWxJgepu_o-Ip436cYacND5gtEEiqUaTd54-QX_kFG0kKBtT2KUyzrrnygOHuY71faqvYfpWa-eF9F42XBZIpm7k8HX3P6S2L5Oc-xzAcPD0_9qAlfSoJcnHXPZp5IlV9RyWwtKkvemU3U-X-sBXwEvw8vxMjR-doGInljBZHj8tU6cxMh_CFZOI3iEpVpgg0Ufos1S0E7a_E2Qw4nm9HDapqPgksk3vwDsSB14z90tilQA4oWw8ZIyTA8zCAH3ewBjuSWdhuoxy9rHP7KKXPKKwYBmI2ckSDiSXZx6axZFqbX-xz8-e_O0YD31VhogElPEEInH0RoPv2T_OZKsX2Qav0SUlZf5rhii_rLeatqRB32bvWK5tC3wASCPRAHsBCS0B7SbRMgZT7P64lufRBK58868_RctNyLPrFZm7xLVOqTsxuBWGANL3jKFsdPZRP4QET5I64wJZE9lrs1i0or4q2jYUph8KhhwWCUlR8XEoEMEmthC7CqRU6g_93-P-ntE4B5qKutdTbAEv0wVmSW8P5sRJM-0RhqMA2ef56etSbwqYIB0Khv6EgtcMTlL4H0uUCLhepfk4DmQM6003ETQRqIj1E1gDamQ3GcwC5djLZLaqtQve-zb3zCLE=w391-h694-no"
    ];

    this.panorama = ["https://lh3.googleusercontent.com/Piv1zYno6_f6ThN1nx9Tn-pzwJNYRYAyJdoqZB7GfvdnJP0nGwALRBjNTksUto0VM8m40YsvOa2tXWbJVIMC2TRAntNkAEU4l_bwefyEh_sFHgTJp456GrpVr4zp44TpmZu3LtD2IOj1atP390fQGnkxVh6ssBnZXdRfzVzOCj3BH46Mtr0JDybZqCAZ9XWJFeLdcpS25kY3_EcLKdYnXghUMuOy_vMfenCMdWGoJGgQJweed_dj7ZfvX69w9zB0Da36KjuSkvUvKoQEUdRRm_M84q4kqo0kvO9dNoFvIcbYN-gFXhnuWoAqYaZt75f7CUPUOBu1XvSgAY-YZ570HMRMIzX4ymM-owVPgJlid27vxaoixBXCGqMO3W-3vJQlL3hfB-W0tHqcySnxaLtGa1cI80wA-HEUX8SKd0iy94dcOrHK_O6N-Tl0CAaxh_uu8eYh5THrohl7jolC9_ROzjBa5L62s8D5UvviJavgSbOQNUzEBqztE-15OHIr8ufLHJ0SEEw4dcwUPrm7YGkIYSzSaHGg2Y4Ek4Bhpmmn-gxQcdBQOJwwRT82lccLYUM0wjiR_NiHnyB5VebGKpoCsSWMGzsp9VWaMugKu-w_AMhaLKKb3A-EEtvdenmxO7P6N89kXovfSJ6TO_Vs-fJw-U94AKVZzWwW4ZaF2wffjlm5DXSFGGXR5YU=w1518-h630-no",
      "https://lh3.googleusercontent.com/xX31XHVeVncvyjKKNTqXDM_8mEjRk5cyRfyuHQvuZ1hIDhawYbpJcVZpYTYEGAbnIQMi3qoO7ACdMqu1XwF9hMEG1CZ4Rq2B1vWjnWSupshDZDHQ8Hj6a8WrxpgW40FF7L0awiPyL_WVqp7_TU0PaP048emHPslVjq8ozbGabQSrc_dQjNVuM4wr6lLDr8qBrCCAR1ig2wfM1kP4eSgzF1lgLU8OspzlJSv6Ge-io8idXr3UDktYOB7t7d-EPHEMm0w0O13Ni-T5Aak8v-WbEidifZr4QUwze0vhCJE1SH2yAcaHqin0QhmRWfzLUct8K0UQUhXvthjqS4AcYzRubBAyAJjfFKWSdcN1NU34fZLfUFI9etRNrukCkdDce8GjdbUhM7fBD-fIEl3dqT8yLVCLVH05bu4TvqjKQai-DSKQiXP53TcSELItzUi6oV2kWeTimgh03Om4sTgkl4OmcQvJJ58BvS8-snkBO0Yj_k75N-LNHCl0BOB4kGPXK4H1qFRhNW7r_6rcIjFC0lnPy0vWFTejVr2WNGIvuZrhn6kZro2Y626P1IoksHJZXLhgSXROevPWR5X2wGTjdM0wm9wx7-tIRvD-ObD4z-_dWUX4lorCTxf6pqK5qA6R5CY2nU80IjhXW2Oo2ZYSJqjhWLNsvZ5pNMthiXVrkO96_dIu_q-_7CBEYPk=w1518-h685-no",
      "https://lh3.googleusercontent.com/1fbzX4WUIqUc_KL0Q6WnvQoFzNhNY5kn9K6gUpe87BpcphDh_vzxrA2GE089A2nA_XSUJXQQYRJQqXy8dUj-f868HfKQ5mtIwWBhvnNv2jpiobBY_dwFdR4v9bAZ9i4PZTfz3cTYP0Dz-sp2QA0YUxTiJ_WrqkxXTYfwa8CBv-0XW85PsP0hH1kgQt0V8vepAIm2TF5v46knR_bGgmbALafRtDcjql4UBhMUeE3_pnk6ySaPxTI42RhC1-TfQTFuBpKgmZHTR0bv3zBiDTM24dhtLI20U-ZJAsyZwdeWoUH7SJ_Hs-g0vQ4jdUpEFknPjVL5MNSFGpRjP8a8npcpW_B-JMgxAdm38tWccpDskQf3z9mN3Y5YG4E2xCgIOJqe1syCCwNDtTVeg9_Ymjrs6rL70ODw-FjywisaKtHx8ufKrsAEVtAwUcxDRhnNRaWUJ1rPGvrnuAXJg4ESG46PkOG_35Wx3YvLjqNI4rW6MrEnibY0MZX_svTdOWsDnA9E50CuoOjxSUoRtIs3l6v7WMQUEZYzp5GaskyoRsgoSeHycQM0W_tVpAkeMP3FQxKpviK5L7IWqmQZv0T-_Vm0H_TSHDsLZwaCY_Kf5u5OkC71pwc4Zr54vkcmkmdfw3Ao7uL6MsVziDP1yXiNppWJYLUe0WdkKsYpgrcXcTZqPumcDYwCKBuS9p0=w1234-h694-no"
    ];

    this.icon = "https://lh3.googleusercontent.com/L517veXCn7sAgyqpQinwbriq6P_y1rxiRnwMlX4gY2oztG9qHi4lnK6FAv7gkQRDZ_ygpxMNi9PXGke3QC0a85pcmxSzVOzoIg3iMWCW7mCcm1vbPNiKDRF1FaSdNhRqwGI3yvsgqo_QHs01g1TP1pc6oXzLrNxGHCyBsDdSSR5cB9I7offjlSX2dt68LRPmyPq3nBFyg8cahk2xszuT1j-TfyDnv59OMxRDvTevGCc65863ajMLAj5xpIvCIHU7fJtSpTQRVPWUwGqo__vAo_PFcyR-QYuPWsbdK0JBvY47WpP4prKXigUCtaCVhbF49IqTTtuzbC0W3-6CsKgCkU5g7oFXydiCphkXmT1bKHXSHcUf8DfUqtlKKUTYD-MYWYiZhMRdRJHqi1pWeJqx_Q6etaymuY9ZgCiVw2pM4Cy0-HXBNfnjHO-Cubo3qC_y4PApOX0GYlWxC6WRx6J0Kt2lUd8qRKuxS4LJzbrGDyoOdUQDbrSne94pCuMQKPsLFj6XXhnagnEGUQrPuJ8UIZ-EHZgSI-22UA-xrdTVFtdwfmbpPES5PkT-XPq8vO8g8bDS99MWrChGHvDaOfFI8ngOn1T-PPVc4XmeqHv6y07xzCURffaORN8ZMQfeYLEDAxUJBYJbXXw3JgULF-gIgiK7_GGYf6lUkP3FJ2oO6tu_2zO4R-TWgeU=w545-h251-no";
    this.evyatar = "https://lh3.googleusercontent.com/zaIbNc9LZoC7-tIjvFqdVNveoxuqXSqwshiKpC7XCaP_tTiaiUO651jg8hfN1wDVD8MyoeFbINnxjmbscumKHPrdZKm2tgBJB4-xWaksgp_sGCHVBwv-MulMMIPTYXnTd5rIjge9Ae-kzobg64wFjhefBHdgRu8O420ajVKVV6vaNiWGXGW8dyNoDfuJI3VcywfvwYheiCLCRpXJbBUgPacsus1BtSmWfIApoIXETkiOpYoUg920VM2X8nzkQM_B6snYiLUZXYswtKK8DXqLFfykXESRBwxk_PsLFEQAPw8vpYdJJPh7K8aftUJSsjrhlKeKprejY-1J18wX42eAqDGLWnLkLcb9thoOHQtLt8GeSrusiWJ0G3duSXjEZHDoF5LZUR6ykQQARFhXq7PUwXWgp8x434iZfsX1hApceQrXpTf2Wgz65ljilG10ufAMqjC4XEUjkOI4ZtCcyaxSOJ_EsOnS1y19IRx-bnVFzz8etm0rbzQtCUvRLE9Qh4TtmRRJKphGMcliJXmhquqmt9W9BFTA6A0OZN6uWtcYL3yPgmkRTuRhdfGmO_ehsYcWNBa6xcPC_qPYJNuTf4Lx_HS95OYeZzsGdmjQTR1EmvnctFM_pZuwry-F_HZpaKG-W7f_RaMlh0Nq7rlpm2wetsffaeou3wW2b2zHfqeIDm8vhktliLyxHHw=w719-h694-no";
    this.isShow = false;
  }

  clickImg() {
    this.isShow = !this.isShow;
  }
}
