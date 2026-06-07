import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { advancedDescription } from './resources/advanced';
import { gasDescription } from './resources/gas';
import { defaultDescription } from './resources/default';

export class Lifi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'lifi',
		name: 'N8nDevLifi',
		icon: { light: 'file:./lifi.svg', dark: 'file:./lifi.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'LI.FI cross-chain swap aggregator bridging multiple DEXs and bridges for optimal routing across 28+ blockchain networks',
		defaults: { name: 'lifi' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevLifiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Advanced",
					"value": "Advanced",
					"description": ""
				},
				{
					"name": "Gas",
					"value": "Gas",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...advancedDescription,
		...gasDescription,
		...defaultDescription
		],
	};
}
