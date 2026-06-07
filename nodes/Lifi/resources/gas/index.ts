import type { INodeProperties } from 'n8n-workflow';

export const gasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gas"
					]
				}
			},
			"options": [
				{
					"name": "GET V 1 Gas Prices",
					"value": "GET V 1 Gas Prices",
					"action": "Get gas prices for enabled chains",
					"description": "This endpoint can be used to get the most recent gas prices for the enabled chains in the server.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/gas/prices"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/gas/prices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gas"
					],
					"operation": [
						"GET V 1 Gas Prices"
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
						"Gas"
					],
					"operation": [
						"GET V 1 Gas Prices"
					]
				}
			}
		},
];
