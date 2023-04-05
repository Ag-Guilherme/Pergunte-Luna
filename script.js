import com.openai.api.*;
import com.openai.api.models.*;

public class Main {
    public static void main(String[] args) {
        String apiKey = "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";
        OpenAI apiInstance = new OpenAI(apiKey);

        try {
            APIResponse<CompletionResponse> response = apiInstance.getCompletionApi().createCompletion(
                "text-davinci-002",
                new CompletionRequest.Builder()
                    .prompt("Hello, world!")
                    .maxTokens(5)
                    .build()
            );

            System.out.println(response.getData().getChoices().get(0).getText());
        } catch (ApiException e) {
            System.err.println("Exception when calling OpenAI API: " + e.getResponseBody());
        }
    }
}


