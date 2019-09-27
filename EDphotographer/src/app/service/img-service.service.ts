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
      "https://lh3.googleusercontent.com/s5eSSBlB4IRr7sFRAgxEMP3rSznftpkU-G0I7Kwn2Ndpia0nYzMMV-baVouxPELatM9L4XcAyLWycERLomcXgkfhJ5Y2NUC6dFV8xIB1CDmO8ZBUOrRK2ZkJl-KXCnt53Pi5XufrvMoirkqYTIweYG7e3_5Yje6rkelbk3Nb6r-GTFGRoyX1ZpFSrth7AEMz4hifNkflo5UuPyIF4EYWRQilKG70WqKwAQKfyOZ5jYGfW_4IBG78TXL-t1K1m2we_qbz27hDLXd5TfEU1uhMXuON0bwJALGy-26nOvquT8pWTw7vRz-PawjHsg0Jz5N_if1mEuxuJ6sO-oIV7bzkR5apBmpYrhe4pi-cE_wQovCljy0PNko10d_i4kO50undcrebBUyVvy4_FdxUNPtihYN84cftaR5CywNjSRmunp4V0oAsNaKoBtG2fyJNrEe0X1VBcJOlSrLvJ-IR8Ab7iUMiD6cz2BVGr8RYqB5ehdVOaJMSeNr0ooxenGkxe0Cpnpp3hjzUXYCnEx-DmHPkknYK-1GfkYwZHc4oKIMGuNIH9kVgcKl7do11fndYOEul-JRFvJWOjErGFEBk7N_tjBmAKxHlxqpfKb16WDfwZ6EyIFmnUN3ZkRBUvHYFLGK8Th1sGvJp-s6AYkZpACLLeqdvvJslMoj_AHLQTqtrxxkbn8VCMgQPHmA=w2400-h4000-no",
      "https://lh3.googleusercontent.com/g8VgVOzwRJihJPYxbHwoKRMqds7_TumJfBhW01Mc5Wfi1O2U-dfNPafN78DnQAswFqKY1FfqbIH4ZfCW0v8bovAM6DQdptUb5y6Y1fdk6Wzv4BF0VFQHWHMjhJ5tqxPyBSmXFb8ORdYsgmFYmn1JhPCe2sdzutFZYB7KoHovDpAnaLi20_McEtW1RgbZ5j7CV2oh0Lu6_i8Nxu7VRBmzIIPkPt1PaSEe5SnIlo4tmqBIw7Bnpw52QFiuOtrodWOsQSjBKal3PCWlOOCCHj3zz4NgHZLGv9sSpOlrdcJXyU91P6r3lK8-mvTuXvuzvjqOhGiVfwAXIbxoxbs1cs4k_oZ5A8w-u3OJVhqchjZzHvfS8oZPWDc3UKK3wur1FwMTODXaht-v0Kytyz0nZmEK3yQtoEDc2FX8tfB6Dj3B3LTAFWchcLXTIwuDf44V43qsBuHg4f6q9AeE2-6j-i_VSGzcsER_nEPFpzXNEZP6Epm8JqeXskI6rgzVP1P93CWvjdM_bLrG3YnSA_DsxT3Nl7Vuq2vxejW8Tsj5UTzAZ2B1CR8LdNL3ucMio0vHCRkvmpNni3Yu2-qbztEYvVZzumTnDKHbuQyhSx4A5xjdQUxjGxr09nfbaXPi_04gic_d63JskjYdqHUs5oxmUvN_PfQpHbTxQ_hwQkGGNzx9TbqaSBOR990u4ng=w2400-h4000-no",
      "https://lh3.googleusercontent.com/7dhFpzXECm4rjO1tRBQ-ZM3i3BEpvvaE-vIUgOIZ0wEYx3L39t3YCBvj7Ooa1FIWxJWbz_1pu6fnLf14ZOTjP6TWZI49yvBaBu9YZeRetrHlqs7bSY961fl08E_CPpNqwJ50VL1WJrTTjQ0r2You-IzAf9KOvEX74OHjnSEBFCqPb9xcDp8gNiNBqf-P5A0od2sow2Nv9b9an8NSBe1WnUOTgNHF4eJq378votZhAcBKTN3gOUy9dWubbEIdTfryjzEnAif9h1PLtWZLXRlpKSjf0Xupbs9agevJVrso1aHZIB1EbXSlI0SrSH10ioK0jsEYSRj9TpfRV9J5QQVZVOjZk1a-K86nowM9ZhnWW4BKgVTHE1vat3Orf29VLSEuhjvPKojNFb-6-NfBotPUddzJBUG4qOWao1lQD6a8JowWwvyOVJZRaWIlH6KpIvW56Szc25rv_63eTuG5NLdvwhldAdcOZIjojBDRbbse2GnTJg0GgfBV97dIxgmHajCxAxN4HmBQR84zluYZaWRI3fBx7VbWftfD_Oy0HscwZwHwg1sC5l7vSd--ARhmZh1gTiOGDUwmI-fFs-58s7FrkQiGLFtIhlP32R4YmNV55LVVRQ9ZhTqW53qoarWZVZTf0r3sNEuB0XMwDsjNU53-qdsmYm17Mxl5zeJk8fuvuD7QCuNHEyjQ-0E=w2400-h4000-no",
      "https://lh3.googleusercontent.com/3mtqFUDPjpdcxyms9mb_kd0Os-tkxZFagSwvZNVFy0DpvnQH7981OsNtAwHgsQvc594XXVN8kdut71Gy-gJZIbgV4TRzCbkaZPGYcdrLGGPUGBiJgnWcf6tnA7krz9yDhy8Pszla5OMZFgQHneyhLGLLDUAkKwfbn4YsZw18isU5UgbwiFJPA7DIgzWSSMLaQQWbePvBdnmlZqk6aUhw0aCdKIoQq8gpB9CNykSAtr18VexzQ_ZalfKQ99DQfG0X8yNqc9riTWs078n1-UqK9VmEsWgjkowGyNiGj79N_-X0AyUOhR1GsxEgF1ydR3hi7fI1FhVDov_cxJxmw1tqtqczMzQRTEpKgFU3kihzzz_OcF56SKv_cVUq4ALux5DxcIg9mCAzI39Jihtn7rTZl6TGSVqEKwuVUPm_Z6Nc0eqLbssNqzBwMKMjKRs7MrhRG6EUEnA9zI_mBBxWJjvDsxf4zCtU2cX5xpkgDZUqVkXNzRvAvBVv8P2rGROI2-zAceAaK2kUcXreVl7-xctKQCfCx5-2jGwQ8f1jdP31G8Fc0TdGNn4er0Q-RSihAir7ns7YmR7elB8cuTiEcVAy8p6lz6CEznHhbSkZHf5OSetdXkymrj7e7wWYkofZvti1Tgd2_OP2kPsXmrwX7eW1I_iNDX0IIF1aCJ0-GDA9bUGVCNOylwpiGDY=w2400-h4000-no",
      "https://lh3.googleusercontent.com/y0uikSdzLRhixrtWWPmM7DfR6_S-_TWLgZ1xusFLCou3-65sD3-ioCwvNNd41mIbBLWE3CLtQ4d7iVKIdr9jJPC0b4q7E14ppp1_RXi_rouhPdIJK2S3LGV3sWjqTN0owJ00oh6FxVU1h5_mWNQFYCpTlvahhzfUYSv0izEiSlV3DR3NJuU6SZJxjXVLOqFqcoirN0LKfE0Ao0ojG6dzrt9KrKAuuXI6hEi2aixC5V1g06fYEChRphTuXqdvH4CHxjAca39Xw0rEk5aMooY2yomcEUOXY4kz3yX7w88NLAWN2vPG2211fUZWq2rkFmtrqiCWNye2q2Vl0Jw4Q2DlxIStNXsiTQI_OIIRx4kTkazq4WOrB6Dmf2U7j73IYX25zYUx7GMnF2KFk7PEZPPTy_dTGpZ3H7lzymJvNvKfzegiI1MaGOZzYFn0penNZ5QG4v-shkszPf9irL4hD_hwo9fZtG-i0Qlrm6O55aJapR4H6kEufrIq5KF5qxsY1_bcF0ceoCYPHZAvvQnrtXvD1VUQeZkQQOMldH021sVOQb-Cn_w2Wjcud_mz4D1r6OskELlU540UCeDDM8xE0QIaHKNVYUUa9kGQAOAY8ugsuWWwDi-UPiKsoSIuZhHbjHbU92EDVM8Is2SsYbJggE2R-zhP8EUuvplEAciMXNRCgHN8Wefja93_p7c=w2400-h4000-no",
      "https://lh3.googleusercontent.com/3MLy2sDdH3xjlhBwqpaurmIREfdusI_Y8cI3ta5A5tCBSFxI9aWaebO2urFQjfGW35H9jcxQZ7-Ah4H9j1lChuN7nLrgusUhRXZyQkltgCJyCXfc-bb3Rfv9c3z5lc1EufRn8B0rnWNagDO8P1OpWH2Cn_c5yb5gJskfWwgVIHMqBsCL3gBgRUMA5TBeZgiwB15Tc62EcbV7Cgw7zgCMSGPREOOkYfW3cE1cAjKFUMT02kaWQ6k9IotBMgjGhForcB373XgKVLQ6TtOmGIhNp6_sckmVtIAT7lrPc97PVLOijX4qUEX0yqUNMTX0yWda8EihlpEyI0IKUg8831mMKhThy28V0RkvAkJL63zXeCAw_irqnRx1jsuVyZ1GFeKg26VUDn9FB9Bi6NwbPwemLQgUa_WvigWxQk1HgeZemB3vEOIKhuOritMO_piUgmLzWZsQwjRB9IzXStnN6psEH1gVVTU8Q4lnEvrlBSG6QHnmP3rnqwbAgQcFWFYPappcj4vjLG8mRWtahvSihEsw1STipGzNKPayLH9wZA-HPEXq3EjTtCNZm4AYHIZRVhdmiKgVKQb3buqrnS9nd4Cfx7Q5Ud2OiYqCkx8Q-BPlfrVqeWJdAPEdukvhA69tKtHO21CQw4xrhbDG186D2BZYPKltsqL9cIU8sUTJl1qJ-T2yS7rvLofcjjk=w2400-h4000-no",
      "https://lh3.googleusercontent.com/vS_zDWxa4Tioajcc--3cww9cCysmozCfyF5hx5eX5w8bpF4LTtX0Wh_vLBolgQr4qf4duPMa9FmA3bR4969ObZQzRpM_801hrMKBrxWSbwkrGlFj0lOBFWTsG6mwtRpBZEbngF9cxSBhC3QTap-SZC1VhTc6txb9XkZBtpCSlNCSC4xCA2EOTN5nRzDpMlrLXOQTz73tdAf6HabWvHPzI3S42nEn_eX0Jb-Ijafhs_Gi2DrzDvau7tADcuoKn-3WVOZGHxWqhnAQZD3vnQOCTUXmbisVDYgrob7ubiIRTfUIYASMeDjGD4XVIIoQ8PEH0MfPIqpqoyP7r3OnPzlzIzs6gdUlO5tA3Yh3R4vsdnkv8EHT27vW1bJ3a3UbYAedEFrSqw6i-ZlgH-RbLr-TfLzKuC7KMsw9Ir_u7jfTOGJdXs0-rycr2FKoeVd3OLOfHpe7xk7jV7sYus3l2Asdyjqnrr-nka9KrvP68tD0nfeQo4_w65Il4xMQ1j3j0KJgQJz90CG2UADvUIthVmRBQBJje2nX52l53agaUHeJbxv1TWpto1mvYGZpGhUnpgwLIMs58WtFYL230-oDvmhbTazMmEhjDiko17NHZsNIF9ma3b9Sfmo-S6iLn85MXnY7xEgut-Tbj7FwvKAiT9Wovlgg-idhVSKobScVtOhstHN8WBkvHUA7dn8=w2400-h4000-no",
      "https://lh3.googleusercontent.com/GABRtc2b5OiGF2IqWNxQgxSK_BaAlkuDWdnzt3y6iwCofpMyB5Du7Uy1HZXP4-PZdeGThZvkaMcR8pbzH1NEDMwPcXgFkqmcKuXTFbYFZfwMLHsLSHpAxf3_C0pbhWqnN5YtZL2o3ketSJICNNXDPSdY0jJtxakO72XXL9Eh44YM2P8nTqSVJRoh6jTIOACyw2JjSZEZKpQtEJMtn4gSILHWWmSkGK9xxP_ByQ0J13hDwR7tKzX0hCOvKc7iyYcJVQEOeVaJNlhDjCa9heCQw1l_C7obqGJRrGpQbBnk-3RtMje_tBN5QFjJo1wENBLLTZV5FP_YluE5tMuH9qowsO8BSP-teG7bG840wYZUCiDlq0xO1M_gUYxpUl-D1WSUruATtgZzKGRsvxB21wd57W8jXCksodaulvLxAXZYfhfS-N_ZKuLT65M218t-NLZMH6MSxGngYzLgbLMFeH94dzt7jDZ15zCUV8mWJFW5HtJw3F6c-Gh2ggKsjUviFsa17e4bsvIonXc2bydb6X8N-fmK1XGThPTcM2oNrkAX-4JezqsHZZH5yJpB1mHTeCyrcowbmUC-t3NznWXVZ3tvO3bvQzhVnVbj9B1rZPwloTST0p6e7cmysLby9k1dyovYvFWhNFLnUfgMl46IPOEJsA-6Ol-ICxyZaYae-XwgTHclFF1FiOm2ep4=w2400-h4000-no",
      "https://lh3.googleusercontent.com/GmzMt19DP7K5n4O9gVYH4BtgAnepg_aXl0_0QQyLdLz1Taa5chg_BBpkCexxWxJgepu_o-Ip436cYacND5gtEEiqUaTd54-QX_kFG0kKBtT2KUyzrrnygOHuY71faqvYfpWa-eF9F42XBZIpm7k8HX3P6S2L5Oc-xzAcPD0_9qAlfSoJcnHXPZp5IlV9RyWwtKkvemU3U-X-sBXwEvw8vxMjR-doGInljBZHj8tU6cxMh_CFZOI3iEpVpgg0Ufos1S0E7a_E2Qw4nm9HDapqPgksk3vwDsSB14z90tilQA4oWw8ZIyTA8zCAH3ewBjuSWdhuoxy9rHP7KKXPKKwYBmI2ckSDiSXZx6axZFqbX-xz8-e_O0YD31VhogElPEEInH0RoPv2T_OZKsX2Qav0SUlZf5rhii_rLeatqRB32bvWK5tC3wASCPRAHsBCS0B7SbRMgZT7P64lufRBK58868_RctNyLPrFZm7xLVOqTsxuBWGANL3jKFsdPZRP4QET5I64wJZE9lrs1i0or4q2jYUph8KhhwWCUlR8XEoEMEmthC7CqRU6g_93-P-ntE4B5qKutdTbAEv0wVmSW8P5sRJM-0RhqMA2ef56etSbwqYIB0Khv6EgtcMTlL4H0uUCLhepfk4DmQM6003ETQRqIj1E1gDamQ3GcwC5djLZLaqtQve-zb3zCLE=w2400-h4000-no",
      "https://lh3.googleusercontent.com/3rV0e-AWrURH2SUjMVZRnpFPds2nYxjSj9IpibscnUA-jyQYPTJuvpwmWKn4hfeme6aALlCUtcO0KnNOlwDr3DJYqmauard-v7KzzIyaer4tw8tDOKlpeis8Ffig_B1yO2fjWFl4Bd8AbAr_9IH_dYHIs0TfcEBwTjR-TMrypA7bQyC1UnicSumOVtFH-g6eGdUByD6m5t8TrJoQuH5orFwP08O0dRfKnWHzqdpv2RDR_G68KCYCq_EbYdYsW3ICtnJSB5kRwFRey9XiW_4bd3gX5Hu0j0gR8Z9aNo_GqabEYJUy2aei3CRGVTgCmT9LvcBwXX5VdGKJhb-SU4WBrWai7Eg5Ge1x_-6Uf4dTFwkzo7NYjR7PgrSzlcAWA9nrPzDG1fGe6m5SJ2ib2PRy2xFtur-HQRdm6BXlXANngnPLJBY3KXpFBC8zHJ9ltLX4kiCSybkzyPf-8EXaPkN7J-pVYrceE7FXsD3m27bY36pFrMLVDew5G4ToE4FdLQrgbxurtnDtilTNVNncFrbVoEsP1OyHjo82hQFTZrAyKOfyKx7rXcWdJKR0mozGqcnUjZBG1K25Xejd_RF6pQhQeuh33HCk3htB7QDYHBmL3Hr0qyknJai28rwevjST8oIQAHev266IH6ta21ZH4KFbBlLYn87rCUdLyh2QMwQkrOPadJdmaC0cE5o=w2400-h4000-no",
      "https://lh3.googleusercontent.com/kuFj-b3ZQihX_BpL_Ah3DA7BN3TwjQeUSk_qhG8ai7whDqxa8w996oJvkn7jMPzdOdU8Z5zwgYcEBMOKgV5OUOQgaIsAKwcCYA0hCaeiF-2f5g-iSuwgdr3rNipgYmv40URvsyoL0WB2zdcsUrAneFyAhHqm5yasghMutwZzgnmFykXPaQT_WbijVFjvliKZPyZ_1ytRM8n8aR-7nrdig6F1jd34WoxouZENb--j9h4zlQ20Wm1yRBjoMx5t_oCzd14tGoPEvv7OXb4k7GHVp-0qoXem1uHMcfX8uerTuba-Hz6g8J9_1S9PHZnVkq7DE5fRZfm3Sb_VCgnAsZdvj2LrhnFsKYjlwJPr2xVHkf7pbTvF-dtasCJEo8BCSLio1jelTosg25jehJTYO3X3v2R34jhtQT9sphouC3v3TBoSyBbuEA9zULMT2CfvmIHrRgny4_zr5MZO-YDyqtPHbzClSpqgdcNObUx0CzrUzhnxy1Ez2WAbujwikLmUBHFi3XRdSU9hZbiPFoBzhlLZ9_3Nhjxy7X6hYhNiKLCjwpVih1Osnnip4Tl1zLnlCT5jpIk6zkS6BQD7eCYAGiaw7LhKkl3Gn9CXksSOG9i8q9O8i1cvGM8_cfoFMcuOoKUR4wnwOiAcovDLcvxCEJlHI1c1wwv7u35MfDVYi6lcafCNZ_One1588l0=w2400-h4000-no",
      "https://lh3.googleusercontent.com/kcZTAUoQcB2pUIuXYqBoN-lGFZkQ-BKn8mcHhaRZCzAF6LDkt1lhDYEljqmS5FZxdAu2Frn6ERHt8y0FE4WYRFa8OOrzqWeZxR0wf4xtoQZX4zERgHLUvAtBRKV7odBC2KH_psl3P3WaxvhUjFRRskwSN9Ceu_jL-cKTKjIIqWp3AnXhO9gQ9xkXeuINcsLlQhHWlzjcomWtxPjaViJduC7VUWqCtcnHJme7QOgCq7MILYWXzUdCm8zGyZ8dljw7eFjkO3aDN8K7acS1uCzAqYVxuPZhqHlhZ6XdjSdwC_6rVOG1RKB0WuSCpRN_3Eb9kGzD1V6kJ5ezCy3isdm6I_gyBLDwXBhC7y6UI4hXwRgaiabSUZznD2XlEF0TSEdulHUJVk9xJ1wecFjRaYOO0Ma4PcBk_ekpcDcOMe6BobjnjKp6ahgAM-Wr2rOkHPE-nnDk5sMA42_mmWRNTyHypUl7OgnKG0FB7q6FEeuFcDapHc_gl1R1OfZ6dFKO4OB4ghk20E0LjsKBdXnAltev1C1qvs96ubUGXoIHjSdNzrV1i2j5YVGMEKdR6_qiG-xL6iXHHPK-gsDSNidTUks76TqVkIKXDRoa7WYez15hxNRV8M5wLjz68cmCvbdah0o4wDDJ_6pgt5O3vIIkdomzGD4h2M7OP86-NJYREE9RRztDEhSGNpiGlfE=w2400-h4000-no",
      "https://lh3.googleusercontent.com/mNdzqWDGxeXw9az9siKrvBDziWmBn92-vMn6N5mqF2hi240JFdyfyxQMB0u4WLrkLZtao48GKZ6AjMdQUdYpwS1RMsS9eXCvWdTHmTJ9oXKnlrKRH2v6hHUoU5eZxlYqE66Fr9tbYXdUDcdgsb5OmasPUtGOogppyHyUKtMxnFOVzsxDh6lKsNXC_fZXTV_O2Kyn6yyk_DXB-HgqVJRbPH601LuRexg2OSQDfQqtI_V1IbgCsB8f1VMWfswTdtfzod-LLxZB8onTUUi5anWlw19YVUvHRaggiB_6sa6usaF5XocQGhEoxG18QZ5wVXr9q9Da7cXR8Cqd9uPbIbJoMneBE0sDGEL0K7uq2PIpc8OHTZ41zf0cB4dQgCZ9ZUSghm_DSiL26Ml2ElpMHnLNyZnOjyCRSzO8LN1EQMxY4MyLA1ocNKIDbD12hzn__5K4tES9IqU7vJDL81d5GZf4Lh3MwJVd234RBQA3_dfCOzecrV75uww_irEqV4yeXC08oTeeh50ic7Fvg2lK3G213Aqy2AUKXWJYmzijQWCFu2LSbmwjnG4k40bE8X2nftgwwMc0li5E-f489GKUGz2WRdnP3j5owSTih6v8KLmbZ0Sj5vgK8qOwHiumWHZg1sU5zg7tReXLhl0OVT6SZh9ZruE6VcQ8Yw_AiAe_gDC8-FKv2GtP_yOW99w=w2400-h4000-no",
      "https://lh3.googleusercontent.com/vxMgS8fJKaJdHlKt7bXyCsWmR8cqu43zetJ56DJ31lUNhdxuSAb5DEWyROrM1CV5ZzdTSOGbZCX3KKRQuaWHaOrK3aR_FsuMkVqzQyPDKW_wdbSFhGbupZ4FJFSlEb8GMjmzxQZ0754hmLI_yMMYBZCKizEGbwSDcgCGFnDi2Bi4NuzR-Of9J2ahp8WwFxlepnjNRx1AQEBTYDiEgABHOndPZEA_R0syIuHJ4iYq9A07hLjnY81yUwDgLNQsebemQvlRDWy9wmHBTujAkB8-pRWTCrp15-QUGzfBCcucIgCelO4qLp4Swt69ZK2yuhreTFzZ8zL2unhWVNuCCJ7xtBc062m8H54JpAiC2Gr4wUxbP-bXggFLUfMfxpcc1bOMMOPYNcqBQICHrCpU4snBiWfXf8-71RYtyzM9_3KDI1Xm4QMZZVcWxRxKbAs72LWtZxKi-U_GIIx3SWvGIOhHCSEJ7QJwAHyik6cApYoA5ZtpLaEmn9Hd4ki8UIgnr2RGtzHhju-IPUaHfkIsjjbPwpwR5RPp-2nIHSD9PO34votKhIfBm3JZlzpBgWWq2acYKDZDm2kljmvLU_5MIe5RlQSjad4jYe3B3sjdqIfi1j5f_RlitNZKV9MpUYzyR4k-68HJwDoMnw_vs77OSxkPbzcCm0vxHihdJNc_O_w-E5-Crb32seTBlw=w2400-h4000-no",
      "https://lh3.googleusercontent.com/0wPq8koUw3E_72XOMMmX7iJCdTWRVlIkuhHQuRkzmKV6thlRGFPy2daY3HDNCTS5L_AkqkGNsl7bzKMPjfFc-3WuKfuREKVdmfizaG7f_lKDwBC0LQSgCVKE9BztMdEkMfqhE080kNtdknFIQZ4Y8A-8tKNULrkOdvJDdT6zEaNlIe5TCjMSEiRaYDda_f3WxuV_9j5N8MhJw2cUW-KuS1tUqKspdDpOnmx8BvFycdGaWidxqUPUf2XP3Yj7YYhK9usjUSfyXy3Dm5waAkXIYcq9sOXaxaZAQEZR22NxrqV4r3zhmO5BpW88LZVqULAvoTutKBVwN8pnXfYaRVyI5U0GrAm6fy_UGFfpbLUxdFAtJqGKiavzdnarzUo67iMQ--VrdSDgFmPD6ov26ptlryNUc74NVSHvePPOvPb7rn7sBb5_whMtp5VE9yWaVR8rVe_WqbAWkYdDKiGKhzywtbOV1RseNYC64MwhOCxuImduy4dmuJ66rpxc7ILT245d9OtA_MUmpTIdDwKE1mMtuJ6KtL6glM0rLk27QftglMUVp-8rgT_zgS5c7HC3_nF06bHOp8oFKy1AKw7DPJ4Vlogpq1cX6lBDhS43Mr_TxriLq9v8p1KtCxrC2nhtqEOqSd8bSJEc2HYOjmA0BEZmChwX4Zrjb4siL271NKA47Llj_VmUCCAlMTw=w2400-h4000-no",
      "https://lh3.googleusercontent.com/7uLEqvKki8tD6dMj1uZtwCusOtbHzr8yhf_z8ryeYm-jf5th3vNJUFvkjok9m3ELManUkRI-55oKevphdSGXp-bEp6RtYtW3yC1wtnWk51tIvlCyP77G5oYnKjw4vGuOBQdzeSbm45YYXhRj2y6uVo07eRWhe7Ae5IN3x5dlqSt0vD7YB7aUsmfuhTZF7Mk6vFLbIzH_oLaOd-rdTVSZHU12zgGhZpjng9RgHyZd1rRVmRvbXuJ4QEw_VB7DxtQogzTCKDP-eQGw-vTSlPLkbPDjXfMQVUef4b4Pru3qhrmM0giviu6QL903o2-lfWYq1kP6mJl-D-YxPQOni8-h6S7eTp0NrLDGOEcM90AKO13nzN_ft4DGAL4dfPyvz2zkz1hoxMD0EbAvJRbjdcGj5eh_oixfbyqeA1UJRHepsnyjI3duypIfUUdK-nvSECLWWzozpl3F4G4wCD8gLrhqxSzN_RSAbRWcpZn1OHz03Yuh73vCtQqrh1ggSumkvWKXpihmDav5nm1ItwOFHNCvLCqLSsaRJ5tpUJYy1_TTMAXB4XsHZtJ5mKMumiv5amLAAH8BUKiUHXN4Z-_QaY9f92eB1W0-rjK0Pps3mIXPswE6lgCzDXUMB3Aee5XkuxZmP8mx8jX1vD1KlXQ5woloPjblPO0DyOU2D7jUTbuu_1eUa7_bSdT-_w=w1512-h3000-no",
      "https://lh3.googleusercontent.com/8XF11jUpI2RJt2WAdMMqy5L1m-AW86iANPrWGKxcl1otTqpJoSicuU7AP6qpi30NEP9-1Rq8r4H19FviXODuPN3BZlUCdi6KKVAkeIijmksyvzyApJiswL-P9caohjK0St6vMlaEsYbMcXatUGxByW57neLAE-WuHgU1oW_L-ODcolkaz3ExDyc90C3DYBptakyZQ5OPfatrzFDfMUUCRD-b5zt9giremwpWrclKQZlFWwc2QRN0kap9MXL8_L9ZS6GOYBf50N1GJog-4MTqwt9VsILb62DQWeg4gti0WqE8hW_zO-P2Bx4mqyjV6IJthU9yEmrbwwYCrNrdzw7z8zz2zK5m2b-JfWIdLwWUJJIXAsajDzpRKSb3PNkIMCPlYdoN7w6_Nt7EQFqxvOGhnDHU7stXlvzke6YJB-21gu4FyjQ8iZ7lMkZVHUVhwkZoAY8SSlgChq_MWFDekVRag4LTwkNs-gfkY1_LqT5xaA1hiWih4MSUBe5qi7ZRR-1-yOtIrEP6ET50_Bp8FhTSREVBRoKUZkY4gNhtj5-UOmxQRMCEbBo8DFgeELMI3-AydtsNJc_YaGsMa4tdPaY6dPH48mrw-aHfcOUdIbM5ldnDwm9pGrIxBvDRvYbXblX-raawrOlflfL3mN6PokfS0bIDKbHUvjTWZJfdxvz_Z74dc9bER3v9GA=w1500-h3000-no",
      "https://lh3.googleusercontent.com/QekQUdmxGvuVX7Etnfvw2DzIHbdbGYER70TfHAYoAcsiE3TGXMQxqBvY-FW_9m4r9HmTne-IiV5D10wm4Ek2LrhG7z_yn16oKNT7BpRWc2SIfxcmzlvXuHC_3XHcJfVFMykcnHTS8JS8NF0PHH-TfGzx74GzCpwmlL8JFf1-hDUomMQ6RWYo6be2o7Cm2PI4reAnF3wnAdR3frmBVakJVTsXGtxkFWte49FwNqCO9QQFRovlea0x8kLG2XYU_9-WZUecmhQAVQ68ttDC8rh7EeJIioY_Lu7NPjBJf5x0EFHz_eBalJu8GSqkr99NiTru8wO1kz6sInh7RbWMv2so7RQpaFCDaldC21R7EwMSSeavI-7g3N0PxcY7moPG_Q27vb5MRGM-Iyifs4u2v_MU-ZYCZT79HaKEq_YyOf2dhcEwZh8z91c81J-fuLVyaoaGYYXUXx4etb1himSXNb_VEBSV5oKcX_yCY07tsvzlmt_6wVNmC5tWfGATyz8oqkN_WnZQkPWkZ8ZnJf_WIpBsFrN9gS-TBQ6Y6q4_XMdYcVhvrOX9puBTOc0IS2Pxw3i5NHir1O3el6dCOmeFAjppOQHNrVyUuwKnu_v9cUJ_q9rQqR-ofCJ7iuq0VUc_e5TdE0stWExEqT0wvtKaDWpQQcb4gwcU7FEMuXLmPQEP4HShmFaEAUeMNQ=w1500-h3025-no"
    ];

    this.panorama = ["https://lh3.googleusercontent.com/Piv1zYno6_f6ThN1nx9Tn-pzwJNYRYAyJdoqZB7GfvdnJP0nGwALRBjNTksUto0VM8m40YsvOa2tXWbJVIMC2TRAntNkAEU4l_bwefyEh_sFHgTJp456GrpVr4zp44TpmZu3LtD2IOj1atP390fQGnkxVh6ssBnZXdRfzVzOCj3BH46Mtr0JDybZqCAZ9XWJFeLdcpS25kY3_EcLKdYnXghUMuOy_vMfenCMdWGoJGgQJweed_dj7ZfvX69w9zB0Da36KjuSkvUvKoQEUdRRm_M84q4kqo0kvO9dNoFvIcbYN-gFXhnuWoAqYaZt75f7CUPUOBu1XvSgAY-YZ570HMRMIzX4ymM-owVPgJlid27vxaoixBXCGqMO3W-3vJQlL3hfB-W0tHqcySnxaLtGa1cI80wA-HEUX8SKd0iy94dcOrHK_O6N-Tl0CAaxh_uu8eYh5THrohl7jolC9_ROzjBa5L62s8D5UvviJavgSbOQNUzEBqztE-15OHIr8ufLHJ0SEEw4dcwUPrm7YGkIYSzSaHGg2Y4Ek4Bhpmmn-gxQcdBQOJwwRT82lccLYUM0wjiR_NiHnyB5VebGKpoCsSWMGzsp9VWaMugKu-w_AMhaLKKb3A-EEtvdenmxO7P6N89kXovfSJ6TO_Vs-fJw-U94AKVZzWwW4ZaF2wffjlm5DXSFGGXR5YU=w1518-h630-no",
      "https://lh3.googleusercontent.com/xX31XHVeVncvyjKKNTqXDM_8mEjRk5cyRfyuHQvuZ1hIDhawYbpJcVZpYTYEGAbnIQMi3qoO7ACdMqu1XwF9hMEG1CZ4Rq2B1vWjnWSupshDZDHQ8Hj6a8WrxpgW40FF7L0awiPyL_WVqp7_TU0PaP048emHPslVjq8ozbGabQSrc_dQjNVuM4wr6lLDr8qBrCCAR1ig2wfM1kP4eSgzF1lgLU8OspzlJSv6Ge-io8idXr3UDktYOB7t7d-EPHEMm0w0O13Ni-T5Aak8v-WbEidifZr4QUwze0vhCJE1SH2yAcaHqin0QhmRWfzLUct8K0UQUhXvthjqS4AcYzRubBAyAJjfFKWSdcN1NU34fZLfUFI9etRNrukCkdDce8GjdbUhM7fBD-fIEl3dqT8yLVCLVH05bu4TvqjKQai-DSKQiXP53TcSELItzUi6oV2kWeTimgh03Om4sTgkl4OmcQvJJ58BvS8-snkBO0Yj_k75N-LNHCl0BOB4kGPXK4H1qFRhNW7r_6rcIjFC0lnPy0vWFTejVr2WNGIvuZrhn6kZro2Y626P1IoksHJZXLhgSXROevPWR5X2wGTjdM0wm9wx7-tIRvD-ObD4z-_dWUX4lorCTxf6pqK5qA6R5CY2nU80IjhXW2Oo2ZYSJqjhWLNsvZ5pNMthiXVrkO96_dIu_q-_7CBEYPk=w1518-h685-no",
      "https://lh3.googleusercontent.com/1fbzX4WUIqUc_KL0Q6WnvQoFzNhNY5kn9K6gUpe87BpcphDh_vzxrA2GE089A2nA_XSUJXQQYRJQqXy8dUj-f868HfKQ5mtIwWBhvnNv2jpiobBY_dwFdR4v9bAZ9i4PZTfz3cTYP0Dz-sp2QA0YUxTiJ_WrqkxXTYfwa8CBv-0XW85PsP0hH1kgQt0V8vepAIm2TF5v46knR_bGgmbALafRtDcjql4UBhMUeE3_pnk6ySaPxTI42RhC1-TfQTFuBpKgmZHTR0bv3zBiDTM24dhtLI20U-ZJAsyZwdeWoUH7SJ_Hs-g0vQ4jdUpEFknPjVL5MNSFGpRjP8a8npcpW_B-JMgxAdm38tWccpDskQf3z9mN3Y5YG4E2xCgIOJqe1syCCwNDtTVeg9_Ymjrs6rL70ODw-FjywisaKtHx8ufKrsAEVtAwUcxDRhnNRaWUJ1rPGvrnuAXJg4ESG46PkOG_35Wx3YvLjqNI4rW6MrEnibY0MZX_svTdOWsDnA9E50CuoOjxSUoRtIs3l6v7WMQUEZYzp5GaskyoRsgoSeHycQM0W_tVpAkeMP3FQxKpviK5L7IWqmQZv0T-_Vm0H_TSHDsLZwaCY_Kf5u5OkC71pwc4Zr54vkcmkmdfw3Ao7uL6MsVziDP1yXiNppWJYLUe0WdkKsYpgrcXcTZqPumcDYwCKBuS9p0=w1234-h694-no",
      "https://lh3.googleusercontent.com/3rV0e-AWrURH2SUjMVZRnpFPds2nYxjSj9IpibscnUA-jyQYPTJuvpwmWKn4hfeme6aALlCUtcO0KnNOlwDr3DJYqmauard-v7KzzIyaer4tw8tDOKlpeis8Ffig_B1yO2fjWFl4Bd8AbAr_9IH_dYHIs0TfcEBwTjR-TMrypA7bQyC1UnicSumOVtFH-g6eGdUByD6m5t8TrJoQuH5orFwP08O0dRfKnWHzqdpv2RDR_G68KCYCq_EbYdYsW3ICtnJSB5kRwFRey9XiW_4bd3gX5Hu0j0gR8Z9aNo_GqabEYJUy2aei3CRGVTgCmT9LvcBwXX5VdGKJhb-SU4WBrWai7Eg5Ge1x_-6Uf4dTFwkzo7NYjR7PgrSzlcAWA9nrPzDG1fGe6m5SJ2ib2PRy2xFtur-HQRdm6BXlXANngnPLJBY3KXpFBC8zHJ9ltLX4kiCSybkzyPf-8EXaPkN7J-pVYrceE7FXsD3m27bY36pFrMLVDew5G4ToE4FdLQrgbxurtnDtilTNVNncFrbVoEsP1OyHjo82hQFTZrAyKOfyKx7rXcWdJKR0mozGqcnUjZBG1K25Xejd_RF6pQhQeuh33HCk3htB7QDYHBmL3Hr0qyknJai28rwevjST8oIQAHev266IH6ta21ZH4KFbBlLYn87rCUdLyh2QMwQkrOPadJdmaC0cE5o=w1236-h694-no",
      "https://lh3.googleusercontent.com/AJePQhJxqdxk-1bOhrGGqoBQdg1hlQPCJjV3xzu00YhyPjsTVQnC3ZUertk3YIedj-dGZMR77VkIxyPSEKvNGMw-awLmKmz1B3JTvSDEnBRSsHQ6umc1Mcf3BlWMbtyjB9TSv1Ep1rnO-LyMzzwAUUpeiAjG0F0CmQ8m3xqMPJyhXzWs6iuXXOEPwMQtj367LOs27T-vMt-dwztXKTkW56nh0LR5Q5EByNe55o79H-Xk-QYl3M0_PCE7e2Q9px4MscOxsKV2WBcUTCcy8NO--AVwOvlqmYMfSbHlrkSxr0TEVnurEkWdodnBetDrN9ceoqZe3ua0-neMkM1Y_aXF6uIj0-gN9X8I6mL57-p2k91wd3HiTm3JShOsj8KrWj6fBT5Bg6ziybr3nNzp2P6VgGqMjUHWQd9WAClXDFo5avHpLv-0o72PSIiCCcn2TRyrCkAeByJJYRD9CLyrdCaWwwnIN2TUrdyOlodghCmVGqrEDI4bt_381uOo1dCWPS7ycwATgXzmWBSjCTyg_dxFymk7z8alaNQW3KCPbnBxBlnuT7Yhp1yDnVceAcIPTp1fuQPFSX8_kESKpYdIe7IyRAtXRxSBZNq63WKaNYTPpegNX8JOnsUqGwbm1iGscAs-ViJVOK9FCGsM7m54lpwv3MPU-Vb0fNs-xZ2OFA0IlQqbcliiu_Wqtw=w1112-h625-no"
    ];

    this.icon = "https://lh3.googleusercontent.com/L517veXCn7sAgyqpQinwbriq6P_y1rxiRnwMlX4gY2oztG9qHi4lnK6FAv7gkQRDZ_ygpxMNi9PXGke3QC0a85pcmxSzVOzoIg3iMWCW7mCcm1vbPNiKDRF1FaSdNhRqwGI3yvsgqo_QHs01g1TP1pc6oXzLrNxGHCyBsDdSSR5cB9I7offjlSX2dt68LRPmyPq3nBFyg8cahk2xszuT1j-TfyDnv59OMxRDvTevGCc65863ajMLAj5xpIvCIHU7fJtSpTQRVPWUwGqo__vAo_PFcyR-QYuPWsbdK0JBvY47WpP4prKXigUCtaCVhbF49IqTTtuzbC0W3-6CsKgCkU5g7oFXydiCphkXmT1bKHXSHcUf8DfUqtlKKUTYD-MYWYiZhMRdRJHqi1pWeJqx_Q6etaymuY9ZgCiVw2pM4Cy0-HXBNfnjHO-Cubo3qC_y4PApOX0GYlWxC6WRx6J0Kt2lUd8qRKuxS4LJzbrGDyoOdUQDbrSne94pCuMQKPsLFj6XXhnagnEGUQrPuJ8UIZ-EHZgSI-22UA-xrdTVFtdwfmbpPES5PkT-XPq8vO8g8bDS99MWrChGHvDaOfFI8ngOn1T-PPVc4XmeqHv6y07xzCURffaORN8ZMQfeYLEDAxUJBYJbXXw3JgULF-gIgiK7_GGYf6lUkP3FJ2oO6tu_2zO4R-TWgeU=w545-h251-no";
    this.evyatar = "https://lh3.googleusercontent.com/zaIbNc9LZoC7-tIjvFqdVNveoxuqXSqwshiKpC7XCaP_tTiaiUO651jg8hfN1wDVD8MyoeFbINnxjmbscumKHPrdZKm2tgBJB4-xWaksgp_sGCHVBwv-MulMMIPTYXnTd5rIjge9Ae-kzobg64wFjhefBHdgRu8O420ajVKVV6vaNiWGXGW8dyNoDfuJI3VcywfvwYheiCLCRpXJbBUgPacsus1BtSmWfIApoIXETkiOpYoUg920VM2X8nzkQM_B6snYiLUZXYswtKK8DXqLFfykXESRBwxk_PsLFEQAPw8vpYdJJPh7K8aftUJSsjrhlKeKprejY-1J18wX42eAqDGLWnLkLcb9thoOHQtLt8GeSrusiWJ0G3duSXjEZHDoF5LZUR6ykQQARFhXq7PUwXWgp8x434iZfsX1hApceQrXpTf2Wgz65ljilG10ufAMqjC4XEUjkOI4ZtCcyaxSOJ_EsOnS1y19IRx-bnVFzz8etm0rbzQtCUvRLE9Qh4TtmRRJKphGMcliJXmhquqmt9W9BFTA6A0OZN6uWtcYL3yPgmkRTuRhdfGmO_ehsYcWNBa6xcPC_qPYJNuTf4Lx_HS95OYeZzsGdmjQTR1EmvnctFM_pZuwry-F_HZpaKG-W7f_RaMlh0Nq7rlpm2wetsffaeou3wW2b2zHfqeIDm8vhktliLyxHHw=w719-h694-no";
    this.isShow = false;
  }

  clickImg() {
    this.isShow = !this.isShow;
  }
}
