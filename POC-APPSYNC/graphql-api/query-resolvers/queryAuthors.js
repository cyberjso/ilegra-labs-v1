import { util } from "@aws-appsync/utils";

export function request(ctx) {
    if (typeof ctx.args.id ===  'undefined') {
        return {
            version: '2018-05-29',
            method: 'GET',
                params: {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                resourcePath: '/authors/v1',
        }
    } else {
        return {
            version: '2018-05-29',
            method: 'GET',
                params: {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                resourcePath: `/authors/v1/${ctx.args.id}`,
        }		
    }
}

export function response(ctx) {
	const { statusCode, body } = ctx.result
	
	if (statusCode === 200) {
		return JSON.parse(body)
	}
	util.appendError(body, statusCode)
}