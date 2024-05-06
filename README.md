/ public function digioVerification(Request $request) { // $gstin_number = $request->gstin_number; // $pan_number = $request->pan_number; // $consignee_name = $request->consginee_name; // $address_line_2 = $request->address_line_2 ?? NULL; // // $document_type = $request->document_type; // $document_type = 'GST'; // $BASE_URL = env('DIGIO_SERVICE_BASE_URL'); // $authorization_key = env('DIGIO_SERVICE_API_TOKEN'); // // $url = env('DIGIO_SERVICE_URL'); // $requestParams = [ // 'id_no' => $gstin_number // ];

//     $headers = [
//         'Content-Type'  => 'application/json',
//         'Accept'        => 'application/json',
//         'Authorization' => 'Basic ' . $authorization_key
//     ];

//     switch ($documentType) {
//         case 'PAN':
//             $BASE_URL = $BASE_URL . '/PAN';
//             break;

//         case 'GST':
//             $BASE_URL = $BASE_URL . '/GST';
//             break;
//     }
//     try {
//         $payloadPAN = [
//             'id_no' => $pan_number
//         ];

//         $payloadGST = [
//             'id_no' => $gstin_number
//         ];

//         if ($document_type == 'PAN') {
//             $client   = new Client();
//             $response = $client->post($BASE_URL, [
//                 'verify'  => false,
//                 'headers' => $headers,
//                 'json'    => $payloadPAN
//             ]);
//             $responseResult = $response->getBody();
//             $responseData   = json_decode($responseResult, true);
//             $name           = $responseData['full_name'];
//             $pan            = $responseData['pan'];
//             $category       = $responseData['category'];
//             $status         = $responseData['status'];

//             $responseData['consignee_name'] = $name;
//             $responseData['pan_number']     = $pan;
//             $responseData['category']       = $category;
//             $responseData['status']         = $status;
//         } else {
//             $client   = new Client();
//             $response = $client->post($BASE_URL, [
//                 'verify'  => false,
//                 'headers' => $headers,
//                 'json'    => $payloadGST
//             ]);
//             $responseResult = $response->getBody();
//             $responseData   = json_decode($responseResult, true);
//             $business_name  = $responseData['corporate_name'];
//             $address_array  = $responseData['details']['pradr']['addr'];
//             $address        = $address_array['bnm'] . ', ' . $address_array['loc'] . ', ' . $address_array['st'] . ', ' . $address_array['bno'] . ', ' . $address_array['flno'];
//             $district       = $address_array['dst'];
//             $state          = $address_array['stcd'];
//             $pincode        = $address_array['pncd'];

//             $responseData['business_name']     = $responseData['corporate_name'];
//             $responseData['address']           = $address;
//             $responseData['consignee_pincode'] = $pincode;
//             $responseData['address_line_2']    = $address_line_2;
//             $responseData['consignee_pincode'] = $pincode;
//             $responseData['state']             = $state;
//             $responseData['district']          = $district;
//         }
//         return GlobalApiResponse::successResponse($this->HTTP_SUCCESS_MESSAGE[0], $this->HTTP_SUCCESS_MESSAGE[1], ['data' => $responseData], '');
//     } catch (\Exception $error) {
//         return GlobalApiResponse::errorResponse($this->HTTP_ERROR_MESSAGE[0], 500, $error->getMessage());
//     }
// }
