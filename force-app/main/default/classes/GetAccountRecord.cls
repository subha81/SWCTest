public with sharing class GetAccountRecord {
    @AuraEnabled(Cacheable=true)
    public static List<account> acnntrecord(){
        try {
            return[Select Id,name from account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}
