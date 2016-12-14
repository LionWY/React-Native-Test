//
//  NativeViewController.m
//  RNJump
//
//  Created by FOODING on 16/12/1451.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "NativeViewController.h"
#import "RCTBridgeModule.h"
#import "AppDelegate.h"
#import "NextNativeViewController.h"

@interface NativeViewController ()<RCTBridgeModule>

@property (nonatomic, strong) NSString *paramsString;

@end

@implementation NativeViewController

RCT_EXPORT_MODULE(NativeVC);

RCT_EXPORT_METHOD(goToNextWith:(NSString *)aStr) {
    
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *app= (AppDelegate *)[[UIApplication sharedApplication] delegate];
        self.paramsString = aStr;
        [app.navi pushViewController:self animated:YES];
    });
    
    
    
  
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    self.navigationController.navigationBar.hidden = NO;

}

- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];
    self.navigationController.navigationBar.hidden = YES;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.title = @"完全是Native";
        
    self.view.backgroundColor = [UIColor redColor];
    
    UILabel *lab = [[UILabel alloc] init];
    lab.frame = CGRectMake(100, 100, 150, 80);
    lab.numberOfLines = 0;
    lab.lineBreakMode = NSLineBreakByCharWrapping;
    lab.backgroundColor = [UIColor cyanColor];
    lab.text = [NSString stringWithFormat:@"从JS传过来的参数为：%@", self.paramsString];
    [self.view addSubview:lab];
    
    
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setTitle:@"再回到js" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(click) forControlEvents:UIControlEventTouchUpInside];
    btn.backgroundColor = [UIColor grayColor];
    btn.frame = CGRectMake(100, 300, 100, 50);
    [self.view addSubview:btn];
    
    
    
}
- (void)click {
    
    NextNativeViewController *vc = [[NextNativeViewController alloc] init];
    vc.title = @"C_Native V_JS";
    [self.navigationController pushViewController:vc animated:YES];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
