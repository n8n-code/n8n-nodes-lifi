import type { INodeProperties } from 'n8n-workflow';

export const advancedDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					]
				}
			},
			"options": [
				{
					"name": "POST V 1 Advanced Routes",
					"value": "POST V 1 Advanced Routes",
					"action": "Get a set of routes for a request that describes a transfer of tokens",
					"description": "In order to execute any transfer, you must first request possible `Routes`. From the result set a `Route` can be selected and executed by retrieving the transaction for every included `Step` using the `/steps/transaction` endpoint.\n**Attention**: This request is more complex and intended to be used via our [JavaScript SDK](https://docs.li.fi/integrate-li.fi-js-sdk/install-li.fi-sdk).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/advanced/routes"
						}
					}
				},
				{
					"name": "POST V 1 Advanced Step Transaction",
					"value": "POST V 1 Advanced Step Transaction",
					"action": "Populate a step with transaction data",
					"description": "This endpoint expects a full `Step` object which usually is retrieved by calling the `/advanced/routes` endpoint and selecting the most suitable `Route`. Afterwards the transaction for every required `Step` can be retrieved using this endpoint.\n**Attention**: This request is more complex and intended to be used via our [JavaScript SDK](https://docs.li.fi/integrate-li.fi-js-sdk/install-li.fi-sdk).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/advanced/stepTransaction"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/advanced/routes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "X Lifi Api Key",
			"name": "x-lifi-api-key",
			"description": "Authentication header, register in the LI.FI Partner Portal (https://portal.li.fi/ ) to get your API Key.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-lifi-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Chain Id",
			"name": "fromChainId",
			"type": "number",
			"default": 0,
			"description": "The sending chain id",
			"routing": {
				"send": {
					"property": "fromChainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Amount",
			"name": "fromAmount",
			"type": "string",
			"default": "",
			"description": "The amount that should be transferred including all decimals (e.g. 1000000 for 1 USDC (6 decimals))",
			"routing": {
				"send": {
					"property": "fromAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Token Address",
			"name": "fromTokenAddress",
			"type": "string",
			"default": "",
			"description": "The address of the sending `Token`",
			"routing": {
				"send": {
					"property": "fromTokenAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Chain Id",
			"name": "toChainId",
			"type": "number",
			"default": 0,
			"description": "The id of the receiving chain",
			"routing": {
				"send": {
					"property": "toChainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Token Address",
			"name": "toTokenAddress",
			"type": "string",
			"default": "",
			"description": "The address of the receiving `Token`",
			"routing": {
				"send": {
					"property": "toTokenAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "Options",
			"name": "options",
			"type": "json",
			"default": "{\n  \"integrator\": \"fee-demo\",\n  \"slippage\": 0.003,\n  \"fee\": 0.02,\n  \"bridges\": {\n    \"allow\": [\n      \"relay\"\n    ]\n  },\n  \"exchanges\": {\n    \"allow\": [\n      \"1inch\",\n      \"openocean\"\n    ]\n  },\n  \"maxPriceImpact\": 0.1\n}",
			"description": "Optional settings for the route",
			"routing": {
				"send": {
					"property": "options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "From Address",
			"name": "fromAddress",
			"type": "string",
			"default": "",
			"description": "The sending wallet address",
			"routing": {
				"send": {
					"property": "fromAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "To Address",
			"name": "toAddress",
			"type": "string",
			"default": "",
			"description": "The receiving wallet address",
			"routing": {
				"send": {
					"property": "toAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "From Amount For Gas",
			"name": "fromAmountForGas",
			"type": "string",
			"default": "",
			"description": "The amount of the token to convert to gas on the destination side.",
			"routing": {
				"send": {
					"property": "fromAmountForGas",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Routes"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/advanced/stepTransaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "X Lifi Api Key",
			"name": "x-lifi-api-key",
			"description": "Authentication header, register in the LI.FI Partner Portal (https://portal.li.fi/ ) to get your API Key.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-lifi-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Skip Simulation",
			"name": "skipSimulation",
			"description": "Parameter to skip transaction simulation. The quote will be returned faster but the transaction gas limit won't be accurate.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "skipSimulation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Mayan Non Evm Permit Signature",
			"name": "mayanNonEvmPermitSignature",
			"description": "Mayan specific option to bridge from non-EVM chain to Hyperliquid",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "mayanNonEvmPermitSignature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Svm Priority Fee Level",
			"name": "svmPriorityFeeLevel",
			"description": "Priority fee level for Solana Virtual Machine (SVM) transactions.",
			"default": "NORMAL",
			"type": "options",
			"options": [
				{
					"name": "NORMAL",
					"value": "NORMAL"
				},
				{
					"name": "FAST",
					"value": "FAST"
				},
				{
					"name": "ULTRA",
					"value": "ULTRA"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "svmPriorityFeeLevel",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Unique identifier of the step",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "swap",
			"description": "The type of the step. `swap` executes a DEX swap on a single chain, `cross` bridges assets between chains, `lifi` runs LiFi's internal multi-action logic, and `protocol` represents protocol-level actions such as fee collection or vault interactions executed inside LiFi managed contracts.",
			"options": [
				{
					"name": "Swap",
					"value": "swap"
				},
				{
					"name": "Cross",
					"value": "cross"
				},
				{
					"name": "Lifi",
					"value": "lifi"
				},
				{
					"name": "Protocol",
					"value": "protocol"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tool",
			"name": "tool",
			"type": "string",
			"default": "",
			"description": "The tool used for this step. E.g. `relay`",
			"routing": {
				"send": {
					"property": "tool",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Tool Details",
			"name": "toolDetails",
			"type": "json",
			"default": "{}",
			"description": "The details of the tool used for this step. E.g. `relay`",
			"routing": {
				"send": {
					"property": "toolDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "json",
			"default": "{\n  \"fromChainId\": 100,\n  \"fromAmount\": \"1000000000000000000\",\n  \"fromToken\": {\n    \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n    \"symbol\": \"MIVA\",\n    \"decimals\": 18,\n    \"chainId\": 100,\n    \"name\": \"Minerva Wallet SuperToken\",\n    \"coinKey\": \"MIVA\",\n    \"priceUSD\": \"0.0455272371751059\",\n    \"logoURI\": \"\"\n  },\n  \"toChainId\": 137,\n  \"toToken\": {\n    \"address\": \"0xc0b2983a17573660053beeed6fdb1053107cf387\",\n    \"symbol\": \"MIVA\",\n    \"decimals\": 18,\n    \"chainId\": 137,\n    \"name\": \"Minerva Wallet SuperToken\",\n    \"coinKey\": \"MIVA\",\n    \"priceUSD\": \"0\",\n    \"logoURI\": \"\"\n  },\n  \"slippage\": 0.003\n}",
			"description": "Object describing what happens in a `Step`",
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Estimate",
			"name": "estimate",
			"type": "json",
			"default": "{\n  \"fromAmount\": \"1000000000000000000\",\n  \"toAmount\": \"999500000000000000\",\n  \"toAmountMin\": \"999500000000000000\",\n  \"tool\": \"allbridge\",\n  \"executionDuration\": 60,\n  \"approvalAddress\": \"0x115909BDcbaB21954bEb4ab65FC2aBEE9866fa93\",\n  \"feeCosts\": [\n    {\n      \"name\": \"Gas Fee\",\n      \"description\": \"Covers gas expense for sending funds to user on receiving chain.\",\n      \"percentage\": \"0\",\n      \"token\": {\n        \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n        \"symbol\": \"MIVA\",\n        \"decimals\": 18,\n        \"chainId\": 100,\n        \"name\": \"Minerva Wallet SuperToken\",\n        \"coinKey\": \"MIVA\",\n        \"priceUSD\": \"0.0455272371751059\",\n        \"logoURI\": \"\"\n      },\n      \"amount\": \"0\",\n      \"amountUSD\": \"0.00\",\n      \"included\": true\n    },\n    {\n      \"name\": \"Relay Fee\",\n      \"description\": \"Covers gas expense for claiming user funds on receiving chain.\",\n      \"percentage\": \"0\",\n      \"token\": {\n        \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n        \"symbol\": \"MIVA\",\n        \"decimals\": 18,\n        \"chainId\": 100,\n        \"name\": \"Minerva Wallet SuperToken\",\n        \"coinKey\": \"MIVA\",\n        \"priceUSD\": \"0.0455272371751059\",\n        \"logoURI\": \"\"\n      },\n      \"amount\": \"0\",\n      \"amountUSD\": \"0.00\",\n      \"included\": true\n    },\n    {\n      \"name\": \"Router Fee\",\n      \"description\": \"Router service fee.\",\n      \"percentage\": \"0.0005\",\n      \"token\": {\n        \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n        \"symbol\": \"MIVA\",\n        \"decimals\": 18,\n        \"chainId\": 100,\n        \"name\": \"Minerva Wallet SuperToken\",\n        \"coinKey\": \"MIVA\",\n        \"priceUSD\": \"0.0455272371751059\",\n        \"logoURI\": \"\"\n      },\n      \"amount\": \"500000000000000\",\n      \"amountUSD\": \"22763618587552.95\",\n      \"included\": true\n    }\n  ],\n  \"gasCosts\": [\n    {\n      \"type\": \"SEND\",\n      \"price\": \"1.22\",\n      \"estimate\": \"140000\",\n      \"limit\": \"175000\",\n      \"amount\": \"170800\",\n      \"amountUSD\": \"0.00\",\n      \"token\": {\n        \"address\": \"0x0000000000000000000000000000000000000000\",\n        \"symbol\": \"xDai\",\n        \"decimals\": 18,\n        \"chainId\": 100,\n        \"name\": \"xDai\",\n        \"coinKey\": \"xDai\",\n        \"priceUSD\": \"1\",\n        \"logoURI\": \"https://static.debank.com/image/xdai_token/logo_url/xdai/1207e67652b691ef3bfe04f89f4b5362.png\"\n      }\n    }\n  ],\n  \"data\": {\n    \"bid\": {\n      \"user\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n      \"router\": \"0xeE2Ef40F688607CB23618d9312d62392786d13EB\",\n      \"initiator\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n      \"sendingChainId\": 100,\n      \"sendingAssetId\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n      \"amount\": \"1000000000000000000\",\n      \"receivingChainId\": 137,\n      \"receivingAssetId\": \"0xc0b2983a17573660053beeed6fdb1053107cf387\",\n      \"amountReceived\": \"999500000000000000\",\n      \"receivingAddress\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n      \"transactionId\": \"0x9f54c1764e19367c44706f4a6253941b81e9ec524af5590091aa8ae67e7644ed\",\n      \"expiry\": 1643369368,\n      \"callDataHash\": \"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\n      \"callTo\": \"0x0000000000000000000000000000000000000000\",\n      \"encryptedCallData\": \"0x\",\n      \"sendingChainTxManagerAddress\": \"0x115909BDcbaB21954bEb4ab65FC2aBEE9866fa93\",\n      \"receivingChainTxManagerAddress\": \"0x6090De2EC76eb1Dc3B5d632734415c93c44Fd113\",\n      \"bidExpiry\": 1643110469\n    },\n    \"gasFeeInReceivingToken\": \"0\",\n    \"totalFee\": \"500000000000000\",\n    \"metaTxRelayerFee\": \"0\",\n    \"routerFee\": \"500000000000000\"\n  }\n}",
			"description": "An estimate for the current transfer",
			"routing": {
				"send": {
					"property": "estimate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"type": "string",
			"default": "",
			"description": "A string containing tracking information about the integrator of the API",
			"routing": {
				"send": {
					"property": "integrator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Included Steps",
			"name": "includedSteps",
			"type": "json",
			"default": "[\n  {\n    \"toolDetails\": {},\n    \"action\": {\n      \"fromChainId\": 100,\n      \"fromAmount\": \"1000000000000000000\",\n      \"fromToken\": {\n        \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n        \"symbol\": \"MIVA\",\n        \"decimals\": 18,\n        \"chainId\": 100,\n        \"name\": \"Minerva Wallet SuperToken\",\n        \"coinKey\": \"MIVA\",\n        \"priceUSD\": \"0.0455272371751059\",\n        \"logoURI\": \"\"\n      },\n      \"toChainId\": 137,\n      \"toToken\": {\n        \"address\": \"0xc0b2983a17573660053beeed6fdb1053107cf387\",\n        \"symbol\": \"MIVA\",\n        \"decimals\": 18,\n        \"chainId\": 137,\n        \"name\": \"Minerva Wallet SuperToken\",\n        \"coinKey\": \"MIVA\",\n        \"priceUSD\": \"0\",\n        \"logoURI\": \"\"\n      },\n      \"slippage\": 0.003\n    },\n    \"estimate\": {\n      \"fromAmount\": \"1000000000000000000\",\n      \"toAmount\": \"999500000000000000\",\n      \"toAmountMin\": \"999500000000000000\",\n      \"tool\": \"allbridge\",\n      \"executionDuration\": 60,\n      \"approvalAddress\": \"0x115909BDcbaB21954bEb4ab65FC2aBEE9866fa93\",\n      \"feeCosts\": [\n        {\n          \"name\": \"Gas Fee\",\n          \"description\": \"Covers gas expense for sending funds to user on receiving chain.\",\n          \"percentage\": \"0\",\n          \"token\": {\n            \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n            \"symbol\": \"MIVA\",\n            \"decimals\": 18,\n            \"chainId\": 100,\n            \"name\": \"Minerva Wallet SuperToken\",\n            \"coinKey\": \"MIVA\",\n            \"priceUSD\": \"0.0455272371751059\",\n            \"logoURI\": \"\"\n          },\n          \"amount\": \"0\",\n          \"amountUSD\": \"0.00\",\n          \"included\": true\n        },\n        {\n          \"name\": \"Relay Fee\",\n          \"description\": \"Covers gas expense for claiming user funds on receiving chain.\",\n          \"percentage\": \"0\",\n          \"token\": {\n            \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n            \"symbol\": \"MIVA\",\n            \"decimals\": 18,\n            \"chainId\": 100,\n            \"name\": \"Minerva Wallet SuperToken\",\n            \"coinKey\": \"MIVA\",\n            \"priceUSD\": \"0.0455272371751059\",\n            \"logoURI\": \"\"\n          },\n          \"amount\": \"0\",\n          \"amountUSD\": \"0.00\",\n          \"included\": true\n        },\n        {\n          \"name\": \"Router Fee\",\n          \"description\": \"Router service fee.\",\n          \"percentage\": \"0.0005\",\n          \"token\": {\n            \"address\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n            \"symbol\": \"MIVA\",\n            \"decimals\": 18,\n            \"chainId\": 100,\n            \"name\": \"Minerva Wallet SuperToken\",\n            \"coinKey\": \"MIVA\",\n            \"priceUSD\": \"0.0455272371751059\",\n            \"logoURI\": \"\"\n          },\n          \"amount\": \"500000000000000\",\n          \"amountUSD\": \"22763618587552.95\",\n          \"included\": true\n        }\n      ],\n      \"gasCosts\": [\n        {\n          \"type\": \"SEND\",\n          \"price\": \"1.22\",\n          \"estimate\": \"140000\",\n          \"limit\": \"175000\",\n          \"amount\": \"170800\",\n          \"amountUSD\": \"0.00\",\n          \"token\": {\n            \"address\": \"0x0000000000000000000000000000000000000000\",\n            \"symbol\": \"xDai\",\n            \"decimals\": 18,\n            \"chainId\": 100,\n            \"name\": \"xDai\",\n            \"coinKey\": \"xDai\",\n            \"priceUSD\": \"1\",\n            \"logoURI\": \"https://static.debank.com/image/xdai_token/logo_url/xdai/1207e67652b691ef3bfe04f89f4b5362.png\"\n          }\n        }\n      ],\n      \"data\": {\n        \"bid\": {\n          \"user\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n          \"router\": \"0xeE2Ef40F688607CB23618d9312d62392786d13EB\",\n          \"initiator\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n          \"sendingChainId\": 100,\n          \"sendingAssetId\": \"0x63e62989d9eb2d37dfdb1f93a22f063635b07d51\",\n          \"amount\": \"1000000000000000000\",\n          \"receivingChainId\": 137,\n          \"receivingAssetId\": \"0xc0b2983a17573660053beeed6fdb1053107cf387\",\n          \"amountReceived\": \"999500000000000000\",\n          \"receivingAddress\": \"0x10fBFF9b9450D3A2d9d1612d6dE3726fACD8809E\",\n          \"transactionId\": \"0x9f54c1764e19367c44706f4a6253941b81e9ec524af5590091aa8ae67e7644ed\",\n          \"expiry\": 1643369368,\n          \"callDataHash\": \"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470\",\n          \"callTo\": \"0x0000000000000000000000000000000000000000\",\n          \"encryptedCallData\": \"0x\",\n          \"sendingChainTxManagerAddress\": \"0x115909BDcbaB21954bEb4ab65FC2aBEE9866fa93\",\n          \"receivingChainTxManagerAddress\": \"0x6090De2EC76eb1Dc3B5d632734415c93c44Fd113\",\n          \"bidExpiry\": 1643110469\n        },\n        \"gasFeeInReceivingToken\": \"0\",\n        \"totalFee\": \"500000000000000\",\n        \"metaTxRelayerFee\": \"0\",\n        \"routerFee\": \"500000000000000\"\n      }\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "includedSteps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Referrer",
			"name": "referrer",
			"type": "string",
			"default": "",
			"description": "A string containing tracking information about the referrer of the integrator",
			"routing": {
				"send": {
					"property": "referrer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Execution",
			"name": "execution",
			"type": "string",
			"default": "",
			"description": "An objection containing status information about the execution",
			"routing": {
				"send": {
					"property": "execution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction Request",
			"name": "transactionRequest",
			"type": "string",
			"default": "",
			"description": "An ether.js TransactionRequest that can be triggered using a wallet provider. (https://docs.ethers.io/v5/api/providers/types/#providers-TransactionRequest)",
			"routing": {
				"send": {
					"property": "transactionRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Advanced"
					],
					"operation": [
						"POST V 1 Advanced Step Transaction"
					]
				}
			}
		},
];
