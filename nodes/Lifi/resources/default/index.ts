import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET V 1 Tokens",
					"value": "GET V 1 Tokens",
					"action": "Fetch all known tokens",
					"description": "This endpoint can be used to fetch all tokens known to the LI.FI services.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/tokens"
						}
					}
				},
				{
					"name": "GET V 1 Token",
					"value": "GET V 1 Token",
					"action": "Fetch information about a Token",
					"description": "This endpoint can be used to get more information about a token by its address or symbol and its chain.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/api-reference/fetch-information-about-a-token).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/token"
						}
					}
				},
				{
					"name": "GET V 1 Quote",
					"value": "GET V 1 Quote",
					"action": "Get a quote for a token transfer",
					"description": "This endpoint can be used to request a quote for a transfer of one token to another, cross chain or not.\nThe endpoint returns a `Step` object which contains information about the estimated result as well as a `transactionRequest` which can directly be sent to your wallet.\nThe estimated result can be found inside the `estimate`, containing the estimated `toAmount` of the requested `Token` and the `toAmountMin`, which is the guaranteed minimum value that the transfer will yield including slippage.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/introduction/user-flows-and-examples/requesting-route-fetching-quote).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/quote"
						}
					}
				},
				{
					"name": "GET V 1 Quote To Amount",
					"value": "GET V 1 Quote To Amount",
					"action": "Get a quote for a token transfer",
					"description": "This endpoint is an alternative to the `v1/quote` endpoint, taking a `toAmount` value rather than `fromAmount`. This endpoint will calculate an appropriate `fromAmount` based on the specified `toAmount`, and use this value to generate the quote data.\nThis endpoint can be used to request a quote for a transfer of one token to another, cross chain or not.\nThe endpoint returns a `Step` object which contains information about the estimated result as well as a `transactionRequest` which can directly be sent to your wallet.\nThe estimated result can be found inside the `estimate`, containing the estimated required `fromAmount` of the sending `Token` to meet the `toAmountMin` of the receiving token, which is the guaranteed minimum value that the transfer will yield including slippage.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/introduction/user-flows-and-examples/requesting-route-fetching-quote).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/quote/toAmount"
						}
					}
				},
				{
					"name": "POST V 1 Quote Contract Calls",
					"value": "POST V 1 Quote Contract Calls",
					"action": "Perform multiple contract calls across blockchains (BETA)",
					"description": "This endpoint can be used to bridge tokens, swap them and perform a number or arbitrary contract calls on the destination chain. You can find an example of it [here](https://github.com/lifinance/sdk/tree/main/examples).\nThis functionality is currently in beta. While we've worked hard to ensure its stability and functionality, there might still be some rough edges.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/quote/contractCalls"
						}
					}
				},
				{
					"name": "GET V 1 Status",
					"value": "GET V 1 Status",
					"action": "Check the status of a cross chain transfer",
					"description": "Cross chain transfers might take a while to complete. Waiting on the transaction on the sending chain doesn't help here. For this reason we build a simple endpoint that let's you check the status of your transfer.\nImportant: The endpoint returns a `200` successful response even if the transaction can not be found. This behavior accounts for the case that the transaction hash is valid but the transaction has not been mined yet.\nWhile none of the parameters `fromChain`, `toChain` and `bridge` are required, passing the `fromChain` parameter will speed up the request and is therefore encouraged.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/introduction/user-flows-and-examples/status-tracking).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/status"
						}
					}
				},
				{
					"name": "GET V 1 Integrators",
					"value": "GET V 1 Integrators",
					"action": "Get integrator's collected fees data for all supported chains",
					"description": "This endpoint can be used to request all integrator's collected fees data by tokens for all supported chains.\nThe endpoint returns an `Integrator` object which contains the integrator id and an array of fee balances for all supported chains.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/integrators/{{$parameter[\"integratorId\"]}}"
						}
					}
				},
				{
					"name": "GET V 1 Integrators Withdraw",
					"value": "GET V 1 Integrators Withdraw",
					"action": "Get transaction request for withdrawing collected integrator's fees by chain",
					"description": "This endpoint can be used to get transaction request for withdrawing integrator's collected fees the specified chain. If a list of token addresses is provided, the generated transaction will only withdraw the specified funds.\nIf there is no collected fees for the provided token's addresses, the `400` error will be thrown.\nThe endpoint returns a `IntegratorWithdrawalTransactionResponse` object which contains the transaction request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/integrators/{{$parameter[\"integratorId\"]}}/withdraw/{{$parameter[\"chainId\"]}}"
						}
					}
				},
				{
					"name": "GET V 1 Chains",
					"value": "GET V 1 Chains",
					"action": "Get information about all currently supported chains",
					"description": "If you want to learn more about how to use this endpoint please have a look at our [guide](/sdk/chains-tools).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/chains"
						}
					}
				},
				{
					"name": "GET V 1 Connections",
					"value": "GET V 1 Connections",
					"action": "Returns all possible connections between two chains.",
					"description": "This endpoint gives information about all possible transfers between chains.\n`fromChain` and `toChain` are required. Additional filters such as token, bridge, and exchange can be used to narrow the result further.\nInformation about which chains and tokens are supported can be taken from the response of the /v1/chains endpoint.\nInformation about which bridges and exchanges are supported can be taken from the response of the `/v1/tools` endpoint.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/connections"
						}
					}
				},
				{
					"name": "GET V 1 Tools",
					"value": "GET V 1 Tools",
					"action": "Get available bridges and exchanges",
					"description": "This endpoint can be used to get information about the bridges and exchanges available trough our service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/tools"
						}
					}
				},
				{
					"name": "GET V 1 Gas Status",
					"value": "GET V 1 Gas Status",
					"action": "Get status information about a lifuel transaction",
					"description": "Get status information about a lifuel transaction",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/gas/status"
						}
					}
				},
				{
					"name": "GET V 1 Gas Suggestion",
					"value": "GET V 1 Gas Suggestion",
					"action": "Get a gas suggestion for the specified chain",
					"description": "Endpoint to retrieve a suggestion on how much gas is needed on the requested chain. The suggestion is based on the average price of 10 approvals and 10 uniswap based swaps via LI.FI on the specified chain.\nIf `fromChain` and `fromToken` are specified, the result will contain information about how much `fromToken` amount the user has to send to receive the suggested gas amount on the requested chain.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/gas/suggestion/{{$parameter[\"chain\"]}}"
						}
					}
				},
				{
					"name": "GET V 1 Calldata Parse",
					"value": "GET V 1 Calldata Parse",
					"action": "Parse transaction call data (BETA)",
					"description": "This endpoint allows to pass transaction call data. It will then parse the call data based on known and on-chain ABIs to provide a JSON overview of the internal transaction information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/calldata/parse"
						}
					}
				},
				{
					"name": "GET V 1 Analytics Transfers",
					"value": "GET V 1 Analytics Transfers",
					"action": "Get a list of filtered transfers",
					"description": "This endpoint can be used to retrieve a list of transfers filtered by certain properties. Returns a maximum of 1000 transfers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/analytics/transfers"
						}
					}
				},
				{
					"name": "GET V 2 Analytics Transfers",
					"value": "GET V 2 Analytics Transfers",
					"action": "Get a paginated list of filtered transfers",
					"description": "A paginated version of the `GET /v1/analytics/transfers endpoint`. This endpoint can be used to retrieve a list of transfers filtered by certain properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/analytics/transfers"
						}
					}
				},
				{
					"name": "GET V 1 Analytics Transfers Summary",
					"value": "GET V 1 Analytics Transfers Summary",
					"action": "Get the total amount of a token received on a specific chain, for cross-chain transfers.",
					"description": "Calculates and returns the total received token amount per wallet address, per sending chain, within a specified time range, for a given receiving chain and receiving token. Only aggregates cross-chain transfers, meaning transfers with distinct sending and receiving chains.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/analytics/transfers/summary"
						}
					}
				},
				{
					"name": "GET V 1 Relayer Status",
					"value": "GET V 1 Relayer Status",
					"action": "GET V 1 Relayer Status",
					"description": "Cross chain relay transfers might take a while to complete. Waiting on the transaction on the sending chain doesn't help here. For this reason we build a simple endpoint that let's you check the status of your transfer.\nImportant: The endpoint returns a `200` successful response even if the transaction can not be found. This behavior accounts for the case that the transaction hash is valid but the transaction has not been mined yet.\nWhile non of the parameters `fromChain`, `toChain` and `bridge` are required, passing the `fromChain` parameter will speed up the request and is therefore encouraged.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/introduction/user-flows-and-examples/status-tracking).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/relayer/status/{{$parameter[\"taskId\"]}}"
						}
					}
				},
				{
					"name": "GET V 1 Relayer Quote",
					"value": "GET V 1 Relayer Quote",
					"action": "Get a quote for a relayed token transfer",
					"description": "This endpoint can be used to request a quote for a transfer of one token to another, cross chain or not.\nThe endpoint returns a `Step` object which contains information about the estimated result as well as a `transactionRequest` which can directly be sent to your wallet.\nThe estimated result can be found inside the `estimate`, containing the estimated `toAmount` of the requested `Token` and the `toAmountMin`, which is the guaranteed minimum value that the transfer will yield including slippage.\nIf you want to learn more about how to use this endpoint please have a look at our [guide](/introduction/user-flows-and-examples/requesting-route-fetching-quote).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/relayer/quote"
						}
					}
				},
				{
					"name": "POST V 1 Relayer Relay",
					"value": "POST V 1 Relayer Relay",
					"action": "Send a signed permit2 transaction to be dispatched by a transaction relayer",
					"description": "Submits a gasless transaction to the relayer for execution on-chain.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/relayer/relay"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
					]
				}
			}
		},
		{
			"displayName": "Chains",
			"name": "chains",
			"description": "Restrict the resulting tokens to the given chains",
			"default": "POL,DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chains",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"description": "Restrict the resulting tokens to the given token tags (comma separated)",
			"default": "stablecoin",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
					]
				}
			}
		},
		{
			"displayName": "Chain Types",
			"name": "chainTypes",
			"description": "Restrict the resulting tokens to the given chainTypes. Available values: EVM, SVM, UTXO, MVM, TVM.",
			"default": "EVM,SVM,UTXO,MVM,TVM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
					]
				}
			}
		},
		{
			"displayName": "Min Price USD",
			"name": "minPriceUSD",
			"description": "Filters results by minimum token price in USD. Minimum value for this parameter is 0. Defaults to 0.0001 USD.",
			"default": 0.01,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "minPriceUSD",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
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
						"Default"
					],
					"operation": [
						"GET V 1 Tokens"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Token"
					]
				}
			}
		},
		{
			"displayName": "Chain",
			"name": "chain",
			"required": true,
			"description": "Id or key of the chain that contains the token",
			"default": "POL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "Address or symbol of the token on the requested chain",
			"default": "DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Token"
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
						"Default"
					],
					"operation": [
						"GET V 1 Token"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"required": true,
			"description": "The sending chain. Can be the chain id or chain key",
			"default": "DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"required": true,
			"description": "The receiving chain. Can be the chain id or chain key",
			"default": "POL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"required": true,
			"description": "The token that should be transferred. Can be the address or the symbol",
			"default": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"required": true,
			"description": "The token that should be transferred to. Can be the address or the symbol",
			"default": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "From Address",
			"name": "fromAddress",
			"required": true,
			"description": "The sending wallet address",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "To Address",
			"name": "toAddress",
			"description": "The receiving wallet address. If none is provided, the fromAddress will be used",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "From Amount",
			"name": "fromAmount",
			"required": true,
			"description": "The amount that should be sent including all decimals (e.g. 1000000 for 1 USDC (6 decimals))",
			"default": "1000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Which kind of route should be preferred **FASTEST**: This sorting criterion prioritizes routes with the shortest estimated execution time. Users who value speed and want their transactions to be completed as quickly as possible should choose the fastest routes. **CHEAPEST**: This criterion focuses on minimizing the cost of the transaction, whether in token amount or USD amount (USD amount minus gas cost). Users looking for the most economical option should choose the cheapest routes.",
			"default": "FASTEST",
			"type": "options",
			"options": [
				{
					"name": "FASTEST",
					"value": "FASTEST"
				},
				{
					"name": "CHEAPEST",
					"value": "CHEAPEST"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"description": "The maximum allowed slippage for the transaction as a decimal value. 0.005 represents 0.5%.",
			"default": 0.005,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "A string containing tracking information about the integrator of the API",
			"default": "fee-demo",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"description": "The percent of the integrator's fee that is taken from every transaction. 0.02 represents 2%. The maximum fee amount should be less than 100%.",
			"default": 0.02,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Referrer",
			"name": "referrer",
			"description": "A string containing tracking information about the referrer of the integrator",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referrer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Bridges",
			"name": "allowBridges",
			"description": "List of bridges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "hop,cbridge",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Exchanges",
			"name": "allowExchanges",
			"description": "List of exchanges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Deny Bridges",
			"name": "denyBridges",
			"description": "List of bridges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "relay",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Deny Exchanges",
			"name": "denyExchanges",
			"description": "List of exchanges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Prefer Bridges",
			"name": "preferBridges",
			"description": "List of bridges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Prefer Exchanges",
			"name": "preferExchanges",
			"description": "List of exchanges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Destination Call",
			"name": "allowDestinationCall",
			"description": "Whether swaps or other contract calls should be allowed as part of the destination transaction of a bridge transfer. Separate swap transactions on the destination chain are not affected by this flag. By default, parameter is `true`.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowDestinationCall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "From Amount For Gas",
			"name": "fromAmountForGas",
			"description": "The amount of the token to convert to gas on the destination side.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAmountForGas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Max Price Impact",
			"name": "maxPriceImpact",
			"description": "The price impact threshold above which routes are hidden. As an example, one should specify 0.15 (15%) to hide routes with more than 15% price impact. The default is 10%.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxPriceImpact",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Swap Step Timing Strategies",
			"name": "swapStepTimingStrategies",
			"description": "Timing setting to wait for a certain amount of swap rates. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapStepTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Route Timing Strategies",
			"name": "routeTimingStrategies",
			"description": "Timing setting to wait for a certain amount of routes to be generated before chosing the best one. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "routeTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
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
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "Preset",
			"name": "preset",
			"description": "Pre-configured routing optimization preset. The preset value `stablecoin` is supported for requesting swap and/or bridging operations involving stablecoin tokens. Each preset provides optimized default settings for slippage, price impact, and tool preferences that can be overridden by custom configuration parameters set in the request.",
			"default": "stablecoin",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "preset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
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
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
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
						"Default"
					],
					"operation": [
						"GET V 1 Quote"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/quote/toAmount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"required": true,
			"description": "The sending chain. Can be the chain id or chain key",
			"default": "DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"required": true,
			"description": "The receiving chain. Can be the chain id or chain key",
			"default": "POL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"required": true,
			"description": "The token that should be transferred. Can be the address or the symbol",
			"default": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"required": true,
			"description": "The token that should be transferred to. Can be the address or the symbol",
			"default": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "From Address",
			"name": "fromAddress",
			"required": true,
			"description": "The sending wallet address",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "To Address",
			"name": "toAddress",
			"description": "The receiving wallet address. If none is provided, the fromAddress will be used",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "To Amount",
			"name": "toAmount",
			"required": true,
			"description": "The amount that will be received including all decimals (e.g. 1000000 for 1 USDC (6 decimals))",
			"default": "1000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Which kind of route should be preferred **FASTEST**: This sorting criterion prioritizes routes with the shortest estimated execution time. Users who value speed and want their transactions to be completed as quickly as possible should choose the fastest routes. **CHEAPEST**: This criterion focuses on minimizing the cost of the transaction, whether in token amount or USD amount (USD amount minus gas cost). Users looking for the most economical option should choose the cheapest routes.",
			"default": "FASTEST",
			"type": "options",
			"options": [
				{
					"name": "FASTEST",
					"value": "FASTEST"
				},
				{
					"name": "CHEAPEST",
					"value": "CHEAPEST"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"description": "The maximum allowed slippage for the transaction as a decimal value. 0.005 represents 0.5%.",
			"default": 0.005,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "A string containing tracking information about the integrator of the API",
			"default": "fee-demo",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"description": "The percent of the integrator's fee that is taken from every transaction. 0.02 represents 2%. The maximum fee amount should be less than 100%.",
			"default": 0.02,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Referrer",
			"name": "referrer",
			"description": "A string containing tracking information about the referrer of the integrator",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referrer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Allow Bridges",
			"name": "allowBridges",
			"description": "List of bridges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "hop,cbridge",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Allow Exchanges",
			"name": "allowExchanges",
			"description": "List of exchanges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Deny Bridges",
			"name": "denyBridges",
			"description": "List of bridges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "relay",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Deny Exchanges",
			"name": "denyExchanges",
			"description": "List of exchanges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Prefer Bridges",
			"name": "preferBridges",
			"description": "List of bridges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Prefer Exchanges",
			"name": "preferExchanges",
			"description": "List of exchanges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Allow Destination Call",
			"name": "allowDestinationCall",
			"description": "Whether swaps or other contract calls should be allowed as part of the destination transaction of a bridge transfer. Separate swap transactions on the destination chain are not affected by this flag. By default, parameter is `true`.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowDestinationCall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Max Price Impact",
			"name": "maxPriceImpact",
			"description": "The price impact threshold above which routes are hidden. As an example, one should specify 0.15 (15%) to hide routes with more than 15% price impact. The default is 10%.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxPriceImpact",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Swap Step Timing Strategies",
			"name": "swapStepTimingStrategies",
			"description": "Timing setting to wait for a certain amount of swap rates. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapStepTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "Route Timing Strategies",
			"name": "routeTimingStrategies",
			"description": "Timing setting to wait for a certain amount of routes to be generated before chosing the best one. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "routeTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
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
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
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
						"Default"
					],
					"operation": [
						"GET V 1 Quote To Amount"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/quote/contractCalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "X Lifi Api Key",
			"name": "x-lifi-api-key",
			"description": "The apiKey allows you to authenticate on the API.",
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
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Chain",
			"name": "fromChain",
			"type": "number",
			"default": 0,
			"description": "The sending chain. Can be the chain id or chain key",
			"routing": {
				"send": {
					"property": "fromChain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Token",
			"name": "fromToken",
			"type": "string",
			"default": "",
			"description": "The token that should be transferred. Can be the address or the symbol",
			"routing": {
				"send": {
					"property": "fromToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Address",
			"name": "fromAddress",
			"type": "string",
			"default": "",
			"description": "The wallet that will send the transaction and contains the starting token",
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
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Chain",
			"name": "toChain",
			"type": "number",
			"default": 0,
			"description": "The receiving chain. Can be the chain id or chain key",
			"routing": {
				"send": {
					"property": "toChain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Token",
			"name": "toToken",
			"type": "string",
			"default": "",
			"description": "The token required to perform the contract interaction (can be something to stake, donate or to be used as payment)",
			"routing": {
				"send": {
					"property": "toToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Amount",
			"name": "toAmount",
			"type": "string",
			"default": "",
			"description": "The amount of token required by the contract interaction. The LI.FI API will try and generate a quote that guarantees at least that amount on the destination chain.",
			"routing": {
				"send": {
					"property": "toAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contract Calls",
			"name": "contractCalls",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "contractCalls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "To Fallback Address",
			"name": "toFallbackAddress",
			"type": "string",
			"default": "",
			"description": "If the call fails, use this address to send the bridged tokens to. If none is specified, the sending address will be used.",
			"routing": {
				"send": {
					"property": "toFallbackAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Contract Outputs Token",
			"name": "contractOutputsToken",
			"type": "string",
			"default": "",
			"description": "Some contract interactions will output a token. This is the case in things like staking. Omit this parameter if no token should be returned to the user.",
			"routing": {
				"send": {
					"property": "contractOutputsToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"type": "number",
			"default": 0,
			"description": "The maximum allowed slippage for the transaction as a decimal value. 0.005 represents 0.5%.",
			"routing": {
				"send": {
					"property": "slippage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
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
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
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
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Allow Bridges",
			"name": "allowBridges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of bridges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "allowBridges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Deny Bridges",
			"name": "denyBridges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of bridges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "denyBridges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Prefer Bridges",
			"name": "preferBridges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of bridges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "preferBridges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Allow Exchanges",
			"name": "allowExchanges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of exchanges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "allowExchanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Deny Exchanges",
			"name": "denyExchanges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of exchanges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "denyExchanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Prefer Exchanges",
			"name": "preferExchanges",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of exchanges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"routing": {
				"send": {
					"property": "preferExchanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Allow Destination Call",
			"name": "allowDestinationCall",
			"type": "boolean",
			"default": true,
			"description": "Whether swaps or other contract calls should be allowed as part of the destination transaction of a bridge transfer. Separate swap transactions on the destination chain are not affected by this flag. By default, parameter is `true`.",
			"routing": {
				"send": {
					"property": "allowDestinationCall",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"type": "number",
			"default": 0,
			"description": "The percent of the integrator's fee that is taken from every transaction. The maximum fee amount should be less than 100%.",
			"routing": {
				"send": {
					"property": "fee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Quote Contract Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Status"
					]
				}
			}
		},
		{
			"displayName": "Tx Hash",
			"name": "txHash",
			"required": true,
			"description": "The transaction hash on the sending chain, destination chain or lifi step id",
			"default": "0xe1ffdcf09d5aa92a2d89b1b39db3f8cadf09428a296cce0d5e387595ac83d08f",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txHash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Status"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"description": "The bridging tool used for the transfer",
			"default": "stargateV2",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bridge",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Status"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"description": "The sending chain. Can be the chain id or chain key",
			"default": "OPT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Status"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"description": "The receiving chain. Can be the chain id or chain key",
			"default": "ARB",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Status"
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
						"Default"
					],
					"operation": [
						"GET V 1 Status"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/integrators/{integratorId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators"
					]
				}
			}
		},
		{
			"displayName": "Integrator Id",
			"name": "integratorId",
			"required": true,
			"description": "Id of the integrator that requests fee balances",
			"default": "fee-demo",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators"
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
						"Default"
					],
					"operation": [
						"GET V 1 Integrators"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/integrators/{integratorId}/withdraw/{chainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Integrator Id",
			"name": "integratorId",
			"required": true,
			"description": "Id of the integrator that requests fee withdrawal",
			"default": "fee-demo",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"required": true,
			"description": "Specify chainId from which funds should be withdrawn",
			"default": 137,
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators Withdraw"
					]
				}
			}
		},
		{
			"displayName": "Token Addresses",
			"name": "tokenAddresses",
			"description": "Specify tokens from which funds should be withdraw",
			"default": [
				"0x0000000000000000000000000000000000000000"
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "tokenAddresses",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Integrators Withdraw"
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
						"Default"
					],
					"operation": [
						"GET V 1 Integrators Withdraw"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/chains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Chains"
					]
				}
			}
		},
		{
			"displayName": "Chain Types",
			"name": "chainTypes",
			"description": "Restrict the resulting chains to the given chainTypes. Available values: EVM, SVM, UTXO, MVM, TVM. Pass all values to get every supported chain. If this parameter is omitted, the API returns only EVM chains.",
			"default": "EVM,SVM,UTXO,MVM,TVM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Chains"
					]
				}
			}
		},
		{
			"displayName": "X Lifi Api Key",
			"name": "x-lifi-api-key",
			"description": "The apiKey allows you to authenticate on the API.",
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
						"Default"
					],
					"operation": [
						"GET V 1 Chains"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"required": true,
			"description": "The chain that should be the start of the possible connections.",
			"default": "POL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"required": true,
			"description": "The chain that should be the end of the possible connections.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"description": "Only return connections starting with this token.",
			"default": "DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"description": "Only return connections ending with this token.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Chain Types",
			"name": "chainTypes",
			"description": "Restrict the resulting connections to the given chainTypes. Available values: EVM, SVM, UTXO, MVM, TVM.",
			"default": "EVM,SVM,UTXO,MVM,TVM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Allow Bridges",
			"name": "allowBridges",
			"description": "List of bridges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Deny Bridges",
			"name": "denyBridges",
			"description": "List of bridges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Prefer Bridges",
			"name": "preferBridges",
			"description": "List of bridges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Allow Exchanges",
			"name": "allowExchanges",
			"description": "List of exchanges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Deny Exchanges",
			"name": "denyExchanges",
			"description": "List of exchanges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Prefer Exchanges",
			"name": "preferExchanges",
			"description": "List of exchanges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Allow Switch Chain",
			"name": "allowSwitchChain",
			"description": "Whether connections that require chain switch should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowSwitchChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "Allow Destination Call",
			"name": "allowDestinationCall",
			"description": "Whether connections that includes destination call should be included in the response.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowDestinationCall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
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
						"Default"
					],
					"operation": [
						"GET V 1 Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/tools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tools"
					]
				}
			}
		},
		{
			"displayName": "Chains",
			"name": "chains",
			"description": "The ids of the chains that should be taken into consideration.",
			"default": "[\n  [\n    \"pol\",\n    \"eth\"\n  ]\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "chains",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Tools"
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
						"Default"
					],
					"operation": [
						"GET V 1 Tools"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/gas/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Status"
					]
				}
			}
		},
		{
			"displayName": "Tx Hash",
			"name": "txHash",
			"required": true,
			"description": "The transaction hash that started the gas refilling process",
			"default": "0x74546ce8aac58d33c212474293dcfeeadecef115847da75131a2ff6692e03b96",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "txHash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Status"
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
						"Default"
					],
					"operation": [
						"GET V 1 Gas Status"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/gas/suggestion/{chain}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Suggestion"
					]
				}
			}
		},
		{
			"displayName": "Chain",
			"name": "chain",
			"required": true,
			"description": "Chain from which gas prices should be shown (can be a chain id or a chain key)",
			"default": 137,
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Suggestion"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"description": "If `fromChain` and `fromToken` are specified, the result will contain information about how much `fromToken` amount the user has to send to receive the suggested gas amount on the requested chain.",
			"default": 100,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Suggestion"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"description": "If `fromChain` and `fromToken` are specified, the result will contain information about how much `fromToken` amount the user has to send to receive the suggested gas amount on the requested chain.",
			"default": "xDai",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Gas Suggestion"
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
						"Default"
					],
					"operation": [
						"GET V 1 Gas Suggestion"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/calldata/parse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Calldata Parse"
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
						"Default"
					],
					"operation": [
						"GET V 1 Calldata Parse"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/analytics/transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "The integrator string to filter by",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Wallet",
			"name": "wallet",
			"description": "The sending OR receiving wallet address ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wallet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The status of the transfers. Possible values are `ALL`, `DONE`, `PENDING`, and `FAILED`. The default is `DONE`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"description": "The oldest timestamp that should be taken into consideration. Defaults to 30 days ago",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"description": "The newest timestamp that should be taken into consideration. Defaults to now",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"description": "The chain where the transfer originates from.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"description": "The chain where the transfer ends.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"description": "The token transferred from the originating chain. To use this parameter `fromChain` must be set.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"description": "The token received on the destination chain. To use this parameter `toChain` must be set.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/analytics/transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Pagination limit. Defines the maximum number of returned results.",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Next",
			"name": "next",
			"description": "The next page cursor. Must come from the `next` field of the response of the previous request.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Previous",
			"name": "previous",
			"description": "The previous page cursor. Must come from the `previous` field of the response of the previous request.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "previous",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "Either a single integrator string, or an array of unique integrator strings to filter transfers by.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Wallet",
			"name": "wallet",
			"description": "The sending OR receiving wallet address ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wallet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "The status of the transfers. Possible values are `ALL`, `DONE`, `PENDING`, and `FAILED`. The default is `DONE`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"description": "The oldest timestamp that should be taken into consideration. Defaults to 30 days ago",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"description": "The newest timestamp that should be taken into consideration. Defaults to now",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"description": "The chain where the transfer originates from.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"description": "The chain where the transfer ends.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"description": "The token transferred from the originating chain. To use this parameter `fromChain` must be set.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"description": "The token received on the destination chain. To use this parameter `toChain` must be set.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 2 Analytics Transfers"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/analytics/transfers/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Pagination limit. Defines the maximum number of returned results.",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "Next",
			"name": "next",
			"description": "The next page cursor. Must come from the `next` field of the response of the previous request.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "next",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "Previous",
			"name": "previous",
			"description": "The previous page cursor. Must come from the `previous` field of the response of the previous request.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "previous",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"required": true,
			"description": "A Unix timestamp in seconds marking the start of the query period, inclusive. Transactions older than this timestamp will not be included in the summary.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"required": true,
			"description": "A Unix timestamp in seconds marking the end of the query period, inclusive. Transactions after this timestamp will not be included in the summary. **The maximum range supported by the endpoint is 30 days.**\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"required": true,
			"description": "The ID, or key of the chain on the receiving side of the transfer. This parameter filters the summary to include only transfers received on the specified chain.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"required": true,
			"description": "The address, or symbol of the token received in the transfers. This parameter filters the summary to include only transfers involving the specified token on the receiving chain.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"description": "The ID, or key of the chain on the sending side of the transfers. This parameter filters the summary to include only transfers sent from the specified chain.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "The integrator string to filter transfers by. This parameter filters the summary to include only transfers for the given integrator.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Analytics Transfers Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/relayer/status/{taskId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Status"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/relayer/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "From Chain",
			"name": "fromChain",
			"required": true,
			"description": "The sending chain. Can be the chain id or chain key",
			"default": "DAI",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "To Chain",
			"name": "toChain",
			"required": true,
			"description": "The receiving chain. Can be the chain id or chain key",
			"default": "POL",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toChain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "From Token",
			"name": "fromToken",
			"required": true,
			"description": "The token that should be transferred. Can be the address or the symbol",
			"default": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "To Token",
			"name": "toToken",
			"required": true,
			"description": "The token that should be transferred to. Can be the address or the symbol",
			"default": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "From Address",
			"name": "fromAddress",
			"required": true,
			"description": "The sending wallet address",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "To Address",
			"name": "toAddress",
			"description": "The receiving wallet address. If none is provided, the fromAddress will be used",
			"default": "0x552008c0f6870c2f77e5cC1d2eb9bdff03e30Ea0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "From Amount",
			"name": "fromAmount",
			"required": true,
			"description": "The amount that should be sent including all decimals (e.g. 1000000 for 1 USDC (6 decimals))",
			"default": "1000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAmount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "Which kind of route should be preferred **FASTEST**: This sorting criterion prioritizes routes with the shortest estimated execution time. Users who value speed and want their transactions to be completed as quickly as possible should choose the fastest routes. **CHEAPEST**: This criterion focuses on minimizing the cost of the transaction, whether in token amount or USD amount (USD amount minus gas cost). Users looking for the most economical option should choose the cheapest routes.",
			"default": "FASTEST",
			"type": "options",
			"options": [
				{
					"name": "FASTEST",
					"value": "FASTEST"
				},
				{
					"name": "CHEAPEST",
					"value": "CHEAPEST"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Slippage",
			"name": "slippage",
			"description": "The maximum allowed slippage for the transaction as a decimal value. 0.005 represents 0.5%.",
			"default": 0.005,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "slippage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"description": "A string containing tracking information about the integrator of the API",
			"default": "fee-demo",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "integrator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Fee",
			"name": "fee",
			"description": "The percent of the integrator's fee that is taken from every transaction. 0.02 represents 2%. The maximum fee amount should be less than 100%.",
			"default": 0.02,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Referrer",
			"name": "referrer",
			"description": "A string containing tracking information about the referrer of the integrator",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referrer",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Bridges",
			"name": "allowBridges",
			"description": "List of bridges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "hop,cbridge",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Exchanges",
			"name": "allowExchanges",
			"description": "List of exchanges that are allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Deny Bridges",
			"name": "denyBridges",
			"description": "List of bridges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "relay",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Deny Exchanges",
			"name": "denyExchanges",
			"description": "List of exchanges that are not allowed for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "denyExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Prefer Bridges",
			"name": "preferBridges",
			"description": "List of bridges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferBridges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Prefer Exchanges",
			"name": "preferExchanges",
			"description": "List of exchanges that should be preferred for this transaction. Retrieve the current catalog from the `/v1/tools` endpoint. Also values `all`, `none`, `default` and `[]` are acceptable and mean all tools of the current type (`all`), no tools (for `none` and `[]` cases) and default tool's settings on the current stage.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "preferExchanges",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Allow Destination Call",
			"name": "allowDestinationCall",
			"description": "Whether swaps or other contract calls should be allowed as part of the destination transaction of a bridge transfer. Separate swap transactions on the destination chain are not affected by this flag. By default, parameter is `true`.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allowDestinationCall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "From Amount For Gas",
			"name": "fromAmountForGas",
			"description": "The amount of the token to convert to gas on the destination side.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromAmountForGas",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Max Price Impact",
			"name": "maxPriceImpact",
			"description": "The price impact threshold above which routes are hidden. As an example, one should specify 0.15 (15%) to hide routes with more than 15% price impact. The default is 10%.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "maxPriceImpact",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Swap Step Timing Strategies",
			"name": "swapStepTimingStrategies",
			"description": "Timing setting to wait for a certain amount of swap rates. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "swapStepTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "Route Timing Strategies",
			"name": "routeTimingStrategies",
			"description": "Timing setting to wait for a certain amount of routes to be generated before chosing the best one. In the format `minWaitTime-${minWaitTimeMs}-${startingExpectedResults}-${reduceEveryMs}`. Please check [docs.li.fi](https://docs.li.fi) for more details.",
			"default": "[\n  \"minWaitTime-600-4-300\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "routeTimingStrategies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
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
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
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
						"Default"
					],
					"operation": [
						"GET V 1 Relayer Quote"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/relayer/relay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token Owner",
			"name": "tokenOwner",
			"type": "string",
			"default": "",
			"description": "",
			"routing": {
				"send": {
					"property": "tokenOwner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
		{
			"displayName": "Permit",
			"name": "permit",
			"type": "json",
			"default": "{\n  \"permitted\": {\n    \"token\": \"0xc2132D05D31c914a87C6611C10748AEb04B58e8F\",\n    \"amount\": \"1000000\"\n  },\n  \"spender\": \"0x6307119078556Fc8aD77781DFC67df20d75FB4f9\",\n  \"nonce\": \"19\",\n  \"deadline\": 1738149521625\n}",
			"description": "A set of parameters specifying the token, permitted amount, spender address, nonce (for uniqueness), and deadline (for expiration) in a Permit2 allowance grant.",
			"routing": {
				"send": {
					"property": "permit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
		{
			"displayName": "Signed Permit Data",
			"name": "signedPermitData",
			"type": "string",
			"default": "",
			"description": "",
			"routing": {
				"send": {
					"property": "signedPermitData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Call Data",
			"name": "callData",
			"type": "string",
			"default": "",
			"description": "",
			"routing": {
				"send": {
					"property": "callData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST V 1 Relayer Relay"
					]
				}
			}
		},
];
